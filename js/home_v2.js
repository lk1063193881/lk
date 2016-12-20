
//评论JS
$(function(){
  $('#q-com-form').submit(function(event){
    event.preventDefault();
    var _this=$(this);
    var _name=$('.user-name').text();
    var _content=_this.find('textarea').val();
    var comList=$('.q-comment-list ul li');
    $.ajax({
      type:'POST',
      url:_this.attr('action'),
      data:_this.serialize(),
      dataType:'json',
      success:function(d){
        if(d.s==0){
          blue.alert('评论需要通过审核才能展示')
          if(comList.length>0){
            comList.eq(0).before('<li><h3><a href="javascript:void(0);" target="_blank">'+_name+'</a></h3><div class="q-comment-body">'+_content+'</div><p class="clearfix"><span>刚刚</span></p></li>');
          }else{
            $('.q-comment-list ul').append('<li><h3><a href="javascript:void(0);" target="_blank">'+_name+'</a></h3><div class="q-comment-body">'+_content+'</div><p class="clearfix"><span>刚刚</span></p></li>');
          }
        }else{
          blue.alert(d.msg,d.s)
        }
      }
    });
  });
});


//新闻列表tab加载
$(function(){
  $('.index_list').off('click','.list-tab-more');
  $('.index_list').on('click','.list-tab-more',function(event){
    event.preventDefault();
    var _url=$(this).attr('href');
    var _parent=$(this).parents('.index_list')
    $.get(_url,function(d){
      _parent.find('.ajax-more').remove();
      _parent.append(d);
    });
  });
});

//下拉菜单
$(function(){
  $('.news_menu ul li').hover(function(){
    if($(this).find('ul').length>0){
      $(this).addClass('hover');
      $(this).find('ul').stop(true).slideDown(300);
    }else{
      return false;
    };
  },function(){
    $(this).removeClass('hover');
    $(this).find('ul').stop(true).slideUp(300);
  });
});

//列表页加载更多独立出来
$(function(){
  $('#mainbox').off('click','.js_more_list')
  $('#mainbox').on('click','.js_more_list',function(event){
    event.preventDefault()
    var _this=$(this);
    var box=_this.attr('data-box');
    var url=_this.attr('href')
   $(box).append('<p class="loading" style="padding:10px; font-size:13px; color:#666; text-align:center">载入中...</p>');
    $.get(url,function(d){
    _this.remove();
    $(box).find('.loading').remove();
    $(box).append(d);
    });
  });
});
