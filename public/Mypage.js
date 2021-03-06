import React, { Component } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { Paper, Button } from '@material-ui/core';
import { db } from './firebase.js';
import './total.css';

class Mypage extends Component {
    deleteReview = () => { {
        var userId = firebase.auth().currentUser.uid; 
          db.collection("users").doc("").delete()
            .then(() => {
            })
            .catch((error) => {
                alert(error.message);
            });
  
   
      };
    }

    // 렌더링
    render() {
        return (
            <div className="Lecture_review_main">
                <div className="sidebar">
                    <aside class="sidebar">
                        <p>언어</p>
                        <ul class="category">
                            <li><a href="#">C / C++</a></li>
                            <li><a href="#">C#</a></li>
                            <li><a href="#">Java</a></li>
                            <li><a href="#">Python</a></li>
                            <li><a href="#">Javascript</a></li>
                        </ul>
                        <p>분야</p>
                        <ul class="category">
                            <li><a href="#">Algorithm</a></li>
                            <li><a href="#">HTML/CSS/Javascript</a></li>
                            <li><a href="#">Server</a></li>
                            <li><a href="#">Full Stack</a></li>
                            <li><a href="#">ML/DL</a></li>
                        </ul>
                    </aside>
                </div>

                <article id="article">
                <Paper classname="paper" elevation={2}>
                    <div class="review_search">
                        <div class="category_name">
                            <span>Full Stack</span>
                        </div>
                        <div>
                            <form class="search">
                                <button>
                                    <i class="fas fa-search"></i>
                                </button>
                                <input class="keyword" type="text" name="search" size="80"></input>
                            </form>
                        </div>
                        <Link to='/lecture_review_write'><Button variant="contained" type="submit">글 작성</Button></Link>
                    </div>
                    <div class="header">
                        <span>링크</span>
                        <span>내용</span>
                        <div class="btn">
                            <button>작성날짜△</button>
                            <button>좋아요</button>
                        </div>

                    </div>
                    <div id="reviews">
                        {db.collection("reviews")
                        .onSnapshot((snaps) => {
                            snaps.forEach((doc) => {
                                const reviewDiv = document.createElement("div");

                                const htmlContent =
                                "<div class=\"review\">\
                                    <ul>\
                                        <li class=\"item\">\
                                            <a href=\"#\"><img src=\"image.jpg\" alt=\"\" width=\"100\"></img></a>\
                                            <div class=\"info\">\
                                            <Link to='/Lecture_review_detail'><div class=\"title\">"+doc.data().lecture_id+"</div></Link>\
                                                <div class=\"rank\">imsi</div>\
                                                <div class=\"tag\">"+doc.data().tags_attribute+"</div>\
                                                <Button variant=\"outlined\" color=\"primary\" type=\"submit\">이 강의만 모아보기</Button>\
                                            </div>\
                                            <div class=\"like\">\
                                                <span class=\"date\">imsi</span>\
                                                <div class=\"likebtn\">\
                                                    <button>\
                                                        <i class=\"fas fa-heart\"></i>\
                                                    </button>\
                                                <div class=\"likepeople\">imsi</div>\
                                                </div>\
                                            <span class=\"writer\">작성자 : imsi</span>\
                                            </div>\
                                        </li>\
                                    </ul>\
                                </div>";

                                reviewDiv.innerHTML = htmlContent;

                                document.getElementById("reviews").appendChild(reviewDiv);
                            })
                        })}
                        <Button variant="outlined">삭제</Button>
                    </div>
                    </Paper>
                </article>
            </div>
        )
    };
}

export default Mypage;
