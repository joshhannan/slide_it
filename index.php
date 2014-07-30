<!DOCTYPE html>
<html>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam." content="" />
        <meta name="keywords" content="" />
        <script src="libs/jquery-1.11.0.min.js"></script>
        <script src="slide_it.min.js"></script>
        <link rel="stylesheet" href="css/global.css">
        <script>
            jQuery(document).ready(function($) {
                $('.banner_slides').slide_it({
                    orientation: 'horizontal',
                    visible_slides: 2
                });
            });
        </script>
    </head>

    <body>
        <header>
            <div class="wrap">
                <h1>Header</h1>
            </div><!--/wrap-->
        </header>
        <section class="banner">
            <div class="banner_slides">
                <div class="wrapper">
                    <div class="banner_slide">
                        <div class="text">
                            <h2>Slide 1</h2>
                            <p>Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.</p>
                        </div><!--/text-->
                        <div class="image">
                            <img src="test_img.jpg" />
                        </div><!--/image-->
                    </div><!--/banner_slide-->
                    <div class="banner_slide">
                        <div class="text">
                            <h2>Slide 2</h2>
                            <p>Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.</p>
                        </div><!--/text-->
                        <div class="image">
                            <img src="test_img.jpg" />
                        </div><!--/image-->
                    </div><!--/banner_slide-->
                    <div class="banner_slide">
                        <div class="text">
                            <h2>Slide 3</h2>
                            <p>Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.</p>
                        </div><!--/text-->
                        <div class="image">
                            <img src="test_img.jpg" />
                        </div><!--/image-->
                    </div><!--/banner_slide-->
                    <div class="banner_slide">
                        <div class="text">
                            <h2>Slide 4</h2>
                            <p>Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper.</p>
                        </div><!--/text-->
                        <div class="image">
                            <img src="test_img.jpg" />
                        </div><!--/image-->
                    </div><!--/banner_slide-->
                </div><!--/slider-->
            </div><!--/banner_slides-->
            <nav class="nav">
                <a class="prev" href="#">Previous</a>
                <a class="next" href="#">Next</a>
            </nav><!--/banner_nav-->
        </section><!--/banner-->
        <section class="main">
            <div class="wrap">
                <h3>Content</h3>
            </div><!--/wrap-->
        </section><!--/main-->
        <footer>
            <div class="wrap">
                <h4>Footer</h4>
            </div><!--/wrap-->
        </footer>
    </body>
</html>
