$(function(){
//city menu
    $('.city em').hover(function(){
      toggleTab('.city em',$(this));
    });
    $('.nav a').hover(function(){
      toggleTab('.nav a',$(this));
    });
//service 
    $('.food').hover(function(){
        serviceOn('.food a', 'food-hover');
    },function(){
        serviceOut('.food a', 'food-hover');
    });
    $('.night-en').hover(function(){
        serviceOn('.night-en a', 'night-en-hover');
    },function(){
        serviceOut('.night-en a', 'night-en-hover');
    });
    $('.shopping').hover(function(){
        serviceOn('.shopping a', 'shopping-hover');
    },function(){
        serviceOut('.shopping a', 'shopping-hover');
    });
    $('.culture').hover(function(){
        serviceOn('.culture a', 'culture-hover');
    },function(){
        serviceOut('.culture a', 'culture-hover');
    });
    $('.relax').hover(function(){
        serviceOn('.relax a', 'relax-hover');
    },function(){
        serviceOut('.relax a', 'relax-hover');
    });
    $('.room').hover(function(){
        serviceOn('.room a', 'room-hover');
    },function(){
        serviceOut('.room a', 'room-hover');
    });
    $('.know').hover(function(){
        serviceOn('.know a', 'know-hover');
    },function(){
        serviceOut('.know a', 'know-hover');
    });
    $('.free').hover(function(){
        serviceOn('.free a', 'free-hover');
    },function(){
        serviceOut('.free a', 'free-hover');
    });
    $('.discuss').hover(function(){
        serviceOn('.discuss a', 'discuss-hover');
    },function(){
        serviceOut('.discuss a', 'discuss-hover');
    });
    $('.club').hover(function(){
        serviceOn('.club a', 'club-hover');
    },function(){
        serviceOut('.club a', 'club-hover');
    });
//tab control
    //store
    $('#store-head a').on('hover',function(){
        tabControl('#store-head a','#sto-option ul',$(this));
    })
    //exquisite
    $('#recom-option a').on('hover',function(){
        tabControl('#recom-option a','#recom div',$(this));
    })
    //subway
    $('#subway-head a').on('hover',function(){
        tabControl('#subway-head a','#sub-option div',$(this));
    })
    //bbs
    $('#bbs-lst h5').on('hover',function(){
        tabControl('#bbs-lst h5','#bbs-lst div',$(this));
    })
    //member
    $('#mem-head a').on('hover',function(){
        tabControl('#mem-head a','#mem-option ul',$(this));
    })
    //coupons
    $('#cou-head a').on('hover',function(){
        tabControl('#cou-head a','#cou-option ul',$(this));
    })
    //scroll top
    animator($('#user-lst'),-90,10000);
    $('#user-lst').hover(
        function(){
           $('#user-lst').stop(); 
        },
        function(){
            animator($('#user-lst'),-90,10000);
        });
    animator($('#shop-lst'),-760,15000);
    $('#shop-lst').hover(
        function(){
           $('#shop-lst').stop(); 
        },
        function(){
            animator($('#shop-lst'),-760,15000);
        });
    $('#pop').hover(
        function(){
            $('.pop-up').show();
            $('.pop-upp').show();
        },
        function(){
            $('.pop-up').hide();
            $('.pop-upp').hide();
        }
    );
});
//tab
function tabControl(option,subject,_this){
    $(option).removeClass('active');
    $(_this).addClass('active');
    $(subject).hide();
    $(subject).eq($(_this).index(option)).show();

}
//city hover
function toggleTab(class_name, _this) {
    $(class_name).removeClass('active');
    _this.addClass('active');
}
//bar hover
function serviceOn(ele, class_name) {
    $(ele).addClass(class_name);
}
function serviceOut(ele, class_name) {
    $(ele).removeClass(class_name);
}
//scroll top
function animator(imgblock,num,speed){
    imgblock.animate(
        {top:num},speed,
        function(){
            imgblock.css({top:0});
            animator(imgblock,num,speed);
        }
    )
}