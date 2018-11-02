
<!--
  #%L
  fifteen General Client Code - a library from the "DukeScript" project.
  %%
  Copyright (C) 2018 Dukehoff GmbH
  %%
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
  #L%
-->


    <head>
        <title>Sort the Tiles</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
        <link rel="stylesheet" href="css/styles.css" />
    </head>
    <body id="body">
        <div id="game" >

            <!--<div  id="shuffle-button" data-bind="click: shuffle" >-->
            <svg display="none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
            <symbol id="icon-spinner11" viewBox="0 0 1024 1024">
                <title>spinner11</title>
                <path class="path1" d="M1024 384h-384l143.53-143.53c-72.53-72.526-168.96-112.47-271.53-112.47s-199 39.944-271.53 112.47c-72.526 72.53-112.47 168.96-112.47 271.53s39.944 199 112.47 271.53c72.53 72.526 168.96 112.47 271.53 112.47s199-39.944 271.528-112.472c6.056-6.054 11.86-12.292 17.456-18.668l96.32 84.282c-93.846 107.166-231.664 174.858-385.304 174.858-282.77 0-512-229.23-512-512s229.23-512 512-512c141.386 0 269.368 57.326 362.016 149.984l149.984-149.984v384z"></path>
            </symbol>
            </defs>
            </svg>

            <svg id="shuffle-button" class="icon icon-spinner11" data-bind="click: shuffle"><use xlink:href="#icon-spinner11"></use></svg>

            <!--</div>-->
            <!--            <div data-bind="if: solved" >
                            <div id="twtbox"></div> 
                        </div>-->
            <div id="best" >
                <span class="display-title" data-bind="text: cheatMode() ? 'BEST:' : 'BEST'"></span>
                <span class="display-text" data-bind="text: best"></span>
            </div>
            <div id="moves" >
                <span class="display-title" data-bind="text:  cheatMode() ? 'MOVES:' : 'MOVES'"></span>
                <span class="display-text" data-bind="text: moves, click: cheat"></span>
            </div>
            <div class="with-image" id="grid" 
                 data-bind="foreach: tiles, css: {'with-image': solved}">
                <!-- ko ifnot: $parent.solved() -->
                <div class="tile with-image" data-bind="text: p, css: 'tile-position-'+ (y()+1) +'-'+(x()+1), attr: { id: 'tile-'+ p()}, click: $parent.move"></div>
                <!-- /ko -->
            </div>
            <div id="hurray" class="animated" data-bind="text: 'Hooray!', visible:solved, css: {bounceInUp: solved, fadeOut: !solved}"></div>

        </div>

        <!-- initialize bck2brwsr -->
<script type="text/javascript" src="bck2brwsr.js"></script>
<script>
            var vm = bck2brwsr('fifteen.js');
            var c = vm.loadClass('com.dukescript.demo.fifteen.BrowserMain');
            c.invoke('main');
</script>
<!-- end of initialization -->

    </body>

