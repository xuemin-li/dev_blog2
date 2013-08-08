var Tools = {

  getCookie: function (c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1){
      c_start = c_value.indexOf(c_name + "=");
    }else if (c_start == -1){
      c_value = null;
    }else{
      c_start = c_value.indexOf("=", c_start) + 1;
      var c_end = c_value.indexOf(";", c_start);
      if (c_end == -1){
        c_end = c_value.length;
      }
      c_value = unescape(c_value.substring(c_start,c_end));
    }
    return c_value;
  },
  
  emailCheck: function (target) {
    var rule = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+[a-zA-Z0-9_-]+.[a-z]{2,4}$/;
    if(!rule.test(target.val())){
      target.addClass('email-error');
      return false;
    }else{
      target.removeClass('email-error');
      return true;
    }
  },

  emptyCheck: function (array) {
    var flag = true;
    $.each(array, function(){
      var self = $(this);
      if(self.val().length == 0){
        self.addClass('error');
        flag = false;
        return;
      }else{
        self.removeClass('error');
        return true;
      }
    });
    return flag;
  },

  getTime: function () {
    var date = new Date();
    var year, month, day, hour, minute, second;
    hour = this.jsTimeFix(date.getHours());
    minute = this.jsTimeFix(date.getMinutes());
    second = this.jsTimeFix(date.getSeconds());
    year = date.getFullYear();
    month = this.jsTimeFix(date.getMonth()+1);
    day = this.jsTimeFix(date.getDate());
    var time = year + '-' + month + '-' + day + ' ' + hour +':' + minute + ':' + second;
    return time;
  },

  jsTimeFix: function (time) {
    return time<10 ? "0"+time : time;
  },

  buildCommentHtml: function (name, time, content) {
    var html="";
    html += '<span class="critime">' +
            time +
            '</span><cite>' +
            name +
            '</cite><p>' +
            content +
            '</p>';
    return html;
  }
}
