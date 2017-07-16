// ==UserScript==
// @name         cnes
// @namespace    cnes
// @version      0.1.0.5a
// @description  Cyber Nations Enhanced Services
// @author       Ryahn aka Ryan Carr
// @match        http://www.cybernations.net/*
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @downloadURL  https://raw.githubusercontent.com/Ryahn/cnes/master/cnes.user.js
// @updateURL    https://raw.githubusercontent.com/Ryahn/cnes/master/cnes.meta.js
// @connect raw.githubusercontent.com
// @connect cybernations.net
// @grant GM_addStyle
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_deleteValue
// @grant GM_listValues
// @grant GM_addValueChangeListener
// @grant GM_removeValueChangeListener
// @grant GM_getResourceText
// @grant GM_getResourceURL
// @grant GM_xmlhttpRequest
// @grant GM_info
// ==/UserScript==


//Test
//Gets population
var pop = $("#table18 > tbody > tr:nth-child(52) > td:nth-child(2)").text().split(/\s+/);
//Returns number
var popnum = pop[1].replace(/,/g,'');
//returns percentage
var percentage = (20 / 100) * popnum;
//returns whole number
var whole = Math.round(percentage);

//Gets military personnel
var mil = $("#table18 > tbody > tr:nth-child(53) > td:nth-child(2) > i").text().split(/\s+/);
//returns number
var milnum = mil[0];

//returns how many to buy
var total = whole - milnum;

//if less than or equal to 5, do not display. Anything over, display
if(total <= 5) return;

//Display message after military personnel numbers
$('#table18 > tbody > tr:nth-child(53) > td:nth-child(2) > i').after(' <span style="color:blue;font-size:12px">Purchase <span style="font-weight:bold;">' + total + '</span> to be at 20% of citizen population</span>');


var tech = $("#table17 > tbody > tr:nth-child(2) > td:nth-child(2) > b > i");

switch (tech) {
    case tech <= 4.5:
        console.log('4.5');
        break;
    case 'prototype':
        console.log('4.5');
        break;
    case 'mootools':
        console.log('4.5');
        break;
    case 'dojo':
        console.log('4.5');
        break;
    default:
        console.log('4.5');
}
