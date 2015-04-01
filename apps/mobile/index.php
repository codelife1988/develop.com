<?php

// comment out the following two lines when deployed to production
defined('YII_DEBUG') or define('YII_DEBUG', true);
defined('YII_ENV') or define('YII_ENV', 'dev');

define('PATH', dirname(dirname(__DIR__)));

require (PATH . '/vendor/autoload.php');
require (PATH . '/vendor/yiisoft/yii2/Yii.php');

require (dirname(__DIR__) . '/common/boostarp.php');

$config = yii\helpers\ArrayHelper::merge(require (__DIR__ . '/config/web.php'), require (dirname(__DIR__) . '/common/config/global.php'));

(new yii\web\Application($config))->run();
