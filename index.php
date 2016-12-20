<?php
 
// 检测PHP环境
if(version_compare(PHP_VERSION,'5.3.0','<'))  die('require PHP > 5.3.0 !');
//当前路径
define('SITE_PATH',getcwd().'/');
//项目目录
define('PROJECT_PATH',SITE_PATH.'ldhcms/');
//核心目录
define('THINK_PATH',PROJECT_PATH.'Core/');
define('APP_DEBUG',true);
define('DIR_SECURE_FILENAME', 'default.html');//安全文件
// 定义目录
define('APP_PATH',PROJECT_PATH.'Application/');
define('COMMON_PATH',PROJECT_PATH.'Common/');
define('RUNTIME_PATH',SITE_PATH.'#runtime/');
define('TMPL_PATH', PROJECT_PATH . 'Templates/');


// 引入ThinkPHP入口文件
require THINK_PATH.'ThinkPHP.php';
//111111
