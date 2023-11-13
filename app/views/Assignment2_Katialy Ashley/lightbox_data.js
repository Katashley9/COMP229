"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Image List

      Filename:lightbox_data.js
*/

// Title of the slideshow
let lightboxTitle = "TOP 11 2024 OUTFITS";

// Names of the image files shown in the slideshow
let imgFiles = ["photo01.jpg", "photo02.webp", "photo03.jpg", "photo04.jpg",
                "photo05.webp", "photo06.jpeg", "photo07.jpeg", "photo08.webp",
                "photo09.jpeg", "photo10.webp", "photo11.jpg"]

// Captions associated with each image
let imgCaptions = new Array(12);
imgCaptions[0]="Louis-vuitton Floral coat spring edition";
imgCaptions[1]="Zendaya wearing cheetah outfit by LAW Coach"; 
imgCaptions[2]="RIHANNA &ASAP-ROCKY IN LV DENIM WEAR(FALL 2024)"; 
imgCaptions[3]="BEYONCE IN SPARKLING YELLOW FIT  (LVPark)"; 
imgCaptions[4]="ZENDAYA WEARING LV COSTUME (Colorado National Monument)";
imgCaptions[5]="KELLY ROWLAND IN CLASSY LV SUIT ";
imgCaptions[6]="KIM KARDASHIAN IN PIXEL PRINTED LV DRESS";
imgCaptions[7]="COI-LERAY IN DENIM JEANS BY LV";
imgCaptions[8]="NAOMI CAMPBELL IN LV PRINTED DESIGN LEATHER DRESS";
imgCaptions[9]="PHARELLL WILLIWMS (DIRECTOR ARTISTIC DESIGNER OF MEN'S WEAR LV) IN GREEN LV FORRUREE JACKET";
imgCaptions[10]="HAILEY BIEBER IN OVERSIZED LV SUITS";


// Count of images in the slideshow
let imgCount = imgFiles.length;
