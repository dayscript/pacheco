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
        $(".gallery-lightgallery .lightgallery-wrapper:nth-child(2) a > img").first().trigger("click");
      });
      //ESQUEMAS
      $('#lightgallery-start-esquemas, .field-name-field-galeria-esquemas img', context).once('pacheco').on('click',function(e){
        e.preventDefault();
        $(".gallery-lightgallery .lightgallery-wrapper:nth-child(3) a > img").first().trigger("click");
      });
      //PLANOS
      $('#lightgallery-start-planos, .field-name-field-galeria-planos img', context).once('pacheco').on('click',function(e){
        e.preventDefault();
        $(".gallery-lightgallery .lightgallery-wrapper:nth-child(4) a > img").first().trigger("click");
      });
      //REFERENTES
      $('#lightgallery-start-referentes, .field-name-field-galeria-referentes img', context).once('pacheco').on('click',function(e){
        e.preventDefault();
        $(".gallery-lightgallery .lightgallery-wrapper:nth-child(5) a > img").first().trigger("click");
      });
      /************************
      *FIN GALERIAS PROYESTOS;*
      *************************/
      relocateView();
      function relocateView() {
          if ($(window).width() < 640) {
          }else{
              $('#block-formularioexpuestoproyectospage-1 details').attr('open', '');
          }
      }
    }
  };

})(jQuery, Drupal);
