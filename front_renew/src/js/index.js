import "core-js/stable";
import "regenerator-runtime/runtime";
import "slick-carousel";
import "./lib/eventModal";
import "./lib/marketing/kakao";
import "./lib/marketing/google";
import "./lib/marketing/mirae";
import "./lib/marketing/mob";
import "./lib/marketing/naver";
import "./main";
import "./service";
import "./access";
import "./introduction";
import "./stepone";
import "../css/style.css";
import "./stepTwo";
import "./stepThree";
import "./stepFour";
import "./price";
import "./button";
import "./stepresult";
import KakaoChat from "./lib/chat/kakaochat";

KakaoChat();

console.log("hello webpack!");
