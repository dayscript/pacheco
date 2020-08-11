/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

  /**
   * Use this behavior as a template for custom Javascript.
   */
  Drupal.behaviors.pacheco = {
    attach: function (context, settings) {
      /***********************
      *loading once per visit*
      ************************/
      if (!sessionStorage.getItem('doNotShow')){
          sessionStorage.setItem('doNotShow', true);
          if ($("body").hasClass("user-logged-in")) {
            $('#loading').addClass('hidden');
          }else{
            $('.loading-style').show('slow');
            setTimeout(function() {
              $('.loading-style').hide('slow');
              }, 4000);  // 4 seconds
            setTimeout(function() {
              $('#loading').addClass('hidden');
              }, 5000);  // 5 seconds
          }
      }else{
        $('#loading').addClass('hidden');
      }
      /*****************************
      *END - loading once per visit*
      ******************************/
      
      //alert("I'm alive!");
      $('#menu-hamburger .hamburger', context).once('pacheco').on('click',function(e){
      	$(this).toggleClass('is-active').closest('body').toggleClass('overflow-hidden');
      	$('#menu-hamburger').toggleClass('closed-right')
      	$('#full-page-menu').toggleClass('hide')
      });
      /********************
      *GALERIAS PROYESTOS;*
      *********************/
      //FOTOS
      $('#lightgallery-start-fotos, .field-name-field-galeria img', context).once('pacheco').on('click',function(e){
        e.preventDefault();
        $('.galeria-fotos .lightgallery-wrapper a > img').first().trigger("click")
      });
      //ESQUEMAS
      $('#lightgallery-start-esquemas, .field-name-field-galeria-esquemas img', context).once('pacheco').on('click',function(e){
        e.preventDefault();
        $('.galeria-esquemas .lightgallery-wrapper a > img').first().trigger("click")
      });
      //PLANOS
      $('#lightgallery-start-planos, .field-name-field-galeria-planos img', context).once('pacheco').on('click',function(e){
        e.preventDefault();
        $('.galeria-planos .lightgallery-wrapper a > img').first().trigger("click")
      });
      //REFERENTES
      $('#lightgallery-start-referentes, .field-name-field-galeria-referentes img', context).once('pacheco').on('click',function(e){
        e.preventDefault();
        $('.galeria-referentes .lightgallery-wrapper a > img').first().trigger("click")
      });
      /************************
      *FIN GALERIAS PROYESTOS;*
      *************************/

      /********************
      *GALERIAS ACADEMIA;*
      *********************/
      $('.section-academia .field-group-tabs-wrapper').removeClass('hidden')
      setTimeout(function() {
        $(".conferencias .owl-carousel").data('owlCarousel').reinit({
            autoHeight : true,
        });
        }, 1000);  // 1 second
      /********************
      *FIN GALERIAS ACADEMIA;*
      *********************/
      
      relocateView();
      function relocateView() {
          if ($(window).width() < 640) {
            $('#menu-hamburger', context).once('pacheco').on('click',function(e){
              $('#block-marcadelsitio').toggleClass("hidden")
              $('.container-photo .info').toggleClass("hidden")
              $('#full-page-menu').css("z-index", "0")
              $('.header').toggleClass("nopadding")
            });
          }else{
              $('#block-formularioexpuestoproyectospage-1 details').attr('open', '');
          }
          var heightImg = $('.conferencias .owl-carousel .owl-item img').height()
          $('.conferencias .owl-theme .owl-controls').css({'top': 'heightImg', 'position': 'absolute'})
      }
    }
  };

})(jQuery, Drupal);
