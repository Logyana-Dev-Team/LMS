import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function QuizContent() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/chapter/${id}`)
      .then((res) => {
        setData(res.data);
        setQuizData(res.data.quiz);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="container-fluid">
        {data ? (
          <div className="container mx-5 my-5 pb-5">
            <h2 className="mb-0 text-info">{data.chapterName}</h2>
            <p className="text-muted" style={{ fontSize: 15 }}>
              Select your options and after completion hit the submit button
            </p>
            <div className="container-fluid">
              {quizData.map((quiz, i) => (
                <div key={i}>
                  <h5 style={{ textTransform: "none" }}>
                    {i + 1}.&nbsp;{quiz.question}
                  </h5>
                  <div className="container-fluid">
                    <div class="form-check  mb-2">
                      <input
                        class="form-check-input"
                        type="radio"
                        key={quiz._id}
                        style={{ padding: "initial", width: "1em" }}
                      />
                      <p className="text-muted mx-3 " style={{ fontSize: 15 }}>
                        {quiz.option1}
                      </p>
                    </div>
                    <div class="form-check  mb-2">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="option2"
                        id="flexRadioDefault2"
                        style={{ padding: "initial", width: "1em" }}
                      />
                      <p className="text-muted mx-3 " style={{ fontSize: 15 }}>
                        {quiz.option2}
                      </p>
                    </div>
                    <div class="form-check  mb-2">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="option3"
                        id="flexRadioDefault3"
                        style={{ padding: "initial", width: "1em" }}
                      />
                      <p className="text-muted mx-3 " style={{ fontSize: 15 }}>
                        {quiz.option3}
                      </p>
                    </div>
                    <div class="form-check  mb-2">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="option4"
                        id="flexRadioDefault4"
                        style={{ padding: "initial", width: "1em" }}
                      />
                      <p className="text-muted mx-3 " style={{ fontSize: 15 }}>
                        {quiz.option4}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
        <nav
          class="navbar fixed-bottom navbar-light bg-light"
          style={{ boxShadow: "0 0px 10px #888" }}
        >
          <div class="container-fluid">
            <div className="d-flex flex-row align-items-center">
              <p className="text-muted m-0" style={{ fontSize: 15 }}>
                Answered : 3
              </p>
              <p className="text-danger ms-5 mb-0" style={{ fontSize: 15 }}>
                Not attempted : 2
              </p>
            </div>
            <div className="d-flex flex-row-reverse align-items-center">
              <a
                href="/module/611186c9f501363f40cbf885"
                className="btn btn-sm btn-info ms-4"
              >
                Submit
              </a>
              <p className="text-muted m-0" style={{ fontSize: 15 }}>
                00Hr. : 14Min : 42Sec
              </p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
