import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Sidebar() {
  const { id } = useParams();
  const [chapter, setChapter] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/chapter/getChapterByModule/${id}`)
      .then((res) => {
        setChapter(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div class="sidebar-sticky p-3" style={{ width: "280px" }}>
        <small className="mb-2">Dashboard</small>
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a
              href="/module"
              class="nav-link align-items-center active"
              aria-current="page"
            >
              <i class="fas fa-list me-2"></i> Overview
            </a>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <a
                class="nav-link align-items-center"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <i class="fas fa-pen-alt me-2"></i> Chapters
              </a>
              <div class="collapse" id="collapseExample">
                <ul>
                  {chapter.map((chapters, i) => (
                    <li key={i}>
                      <a class="dropdown-item" href="#">
                        {chapters.chapterName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a href="/grades" class="nav-link align-items-center link-dark">
              <i class="fas fa-award me-3"></i> Grades
            </a>
          </li>
          <li>
            <a
              href={"/courseInfo/" + id}
              class="nav-link align-items-center link-dark"
            >
              <i class="fas fa-info-circle me-2"></i> Course Info
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
