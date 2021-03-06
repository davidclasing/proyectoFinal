<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit222ab2d593dc3186aff05eb33224a58a
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit222ab2d593dc3186aff05eb33224a58a::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit222ab2d593dc3186aff05eb33224a58a::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
