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
    }
  };

})(jQuery, Drupal);
