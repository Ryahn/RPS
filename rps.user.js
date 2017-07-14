// ==UserScript==
// @name         Recommended Purchases Script
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Recommends how much tech or military to purchase
// @author       Ryahn aka Ryan Carr
// @match        http://www.cybernations.net/nation_drill_display.asp?Nation_ID=*
// @grant        none
// @require https://code.jquery.com/jquery-3.2.1.min.js
// ==/UserScript==

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


// var tech = $("#table17 > tbody > tr:nth-child(2) > td:nth-child(2) > b > i");
//
// switch (tech) {
// 	case tech <= 4.5:
// 		console.log('4.5');
// 		break;
// 	case 'prototype':
// 		console.log('4.5');
// 		break;
// 	case 'mootools':
// 		console.log('4.5');
// 		break;
// 	case 'dojo':
// 		console.log('4.5');
// 		break;
// 	default:
// 		console.log('4.5');
// }
