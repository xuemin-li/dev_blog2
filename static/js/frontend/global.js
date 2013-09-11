(function($){

  // Comment Add Check
  $(document).on('click', '#comment_add_form_btn', function(){
    var self = $(this);
    var u_form = $('#comment'),
        u_name = u_form.find('.username'),
        u_email = u_form.find('.email'),
        u_comment = u_form.find('.comment');

      var flag1 = Tools.emptyCheck([u_name, u_email, u_comment]);
      var flag2 = Tools.emailCheck(u_email);

      if((flag1 == true) && (flag2 == true)){
        self.val('通知博主中...').fadeTo('slow', 0.5).attr('disabled', true);
        did = u_form.find('#did').val(),
        name = u_name.val(),
        email = u_email.val(),
        comment = u_comment.val();

        $.ajax({
          type: 'POST',
          url: "/comment/add",
          data: {
              username : name,
              did      : did,
              email    : email,
              comment  : comment
          },
          success: function(data){
              self.val('提交').attr('disabled', false).removeAttr('style');
          },
          error: function(){
            self.val('发生错误, 错误信息已发送给博主');
          }
        });
        var time = Tools.getTime();
        var html = Tools.buildCommentHtml(name, time, comment);
        $('<li class="visitor new-comment"></li>').appendTo('.critic');
        $('body, html').animate({ scrollTop: $('.new-comment:last-child').offset().top - 200}, 900);
        $('.new-comment:last-child').hide().append(html).fadeIn(4000);
        u_comment.val('');
      }
      else{
        return false;
      }
  });

  $(document).on('click', '#back_to_top', function() {
    $('body, html').animate({ scrollTop: $('#nav').offset().top }, 200);
  });

  $(document).ready(function() {

    // load code prettyprint
    if($('code').length>0){
      $('code').parent().addClass('prettyprint');
      prettyPrint();
    };

    // replace non-unicode guest name
    if($('.welcome-back').length > 0) {
      var pos1 = $('.welcome-back').find('a'),
          pos2 = $('.username');

      var guest_name = Tools.getCookie('guest_name').replace(/"/g, '');
      var guest_email = Tools.getCookie('guest_email').replace(/"/g, '');

      pos1.text(guest_name);
      pos2.val(guest_name);

    }

    $("img").each(function () {
      var self = $(this);
      self.parent().attr('href', self.attr('src'));
      self.parent().addClass('fancybox');
    });

    $('.fancybox').fancybox({
      'titlePosition'   : 'outside',
      'overlayColor'    : '#000',
      'overlayOpacity'  : 0.8
    });
  });

})(jQuery);
