(function (globalContext) {
    "use strict";

    // Local dependencies.
    var $ = globalContext.jQuery,
        Drupal = globalContext.Drupal;

    Drupal.behaviors.ppGoogleTranslate = {
        attach: function (context, settings) {

            $('#block-locale-language', context).once('google-translator-gadget-added', function (index, element) {
              var gadget = '';

              gadget += '<div id="block-google-gadget">';
              gadget += '<div class="info">';
              gadget += Drupal.t("Participedia teams working in English and German have translated the website’s interface into these two languages. All translations of article contents are provided by users. To access the website interface and article content in other languages, please use Google Translate's auto-translation tool below. Note that the Google translations have not been reviewed by our project staff.");
              gadget += '</div>';
              gadget += '<div class="gadget"></div>';
              gadget += '<a href="#" class="close">' + Drupal.t('close') + '</a>';
              gadget += '</div>';
              $(this).after(gadget);

              $('.language-switcher-locale-url li.last', this).removeClass('last');
              $('.language-switcher-locale-url', this).append('<li class="google-gadget last"><a href="#">other</a></li>');
              $('.language-switcher-locale-url .google-gadget a', this).click(function (event){
                $('#block-google-gadget').fadeToggle();
                return false;
              });

              $('#block-google-gadget > .gadget').append($('#block-pp-google-translate-gadget'));

              $(document).delegate('#block-google-gadget a.close', 'click', function (event){
                $('#block-google-gadget').fadeOut();
                return false;
              });
            });
        }
    };

})(window);
;
