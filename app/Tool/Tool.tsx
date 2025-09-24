"use client";

import styles from "./Tool.module.css";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

declare global {
  interface Window {
    gtag: any;
  }
}

const About = () => {
  const [repoUrl, setRepoUrl] = useState("");
  const [queryUrl, setQueryUrl] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [copyStatus, setCopyStatus] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const fallBackUrl =
    "https://github.com/JohnVersus/github-social-image-generator";

  useEffect(() => {
    const query_url = searchParams?.get("repo_url");
    if (query_url) {
      setQueryUrl(query_url);
    } else {
      setQueryUrl(fallBackUrl);
    }
  }, [searchParams]);

  useEffect(() => {
    if (queryUrl) {
      setStatus("loading");
    }
  }, [queryUrl]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // 2. Create a function to handle the copy action
  const trackEvent = (
    action: string,
    category: string,
    label: string,
    value: number
  ) => {
    if (window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(
        "https://webapi.johnversus.dev/api/generateGithubSocial?repo_url=" +
          queryUrl
      )
      .then(
        function () {
          setCopyStatus("Copied!");
          setTimeout(() => setCopyStatus(""), 2000); // Clear the status after 2 seconds
        },
        function (err) {
          console.error("Could not copy text: ", err);
        }
      );
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.followButtonContainer}>
          <a
            href="https://x.com/johnvs_nagendra"
            className="twitter-follow-button"
            data-size="large"
            data-show-count="false"
            onClick={() => trackEvent("click", "social", "follow_on_x", 1)}
          >
            Follow @johnvs_nagendra
          </a>
        </div>
        <h1 className={styles.title}>GitHub Social Image Generator</h1>
        <h2 className={styles.visuallyHidden}>
          GitHub Social Preview and Repo Image Generator
        </h2>
        <p className={styles.visuallyHidden}>
          Create stunning social preview images for your GitHub repositories
          with this free online tool. Our GitHub social image generator helps
          you make custom repo images in seconds. Simply enter your repository
          URL to generate a social media preview that will make your project
          stand out.
        </p>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            trackEvent("click", "generate", "click_to_generate", 1);
            // router.push("/?" + createQueryString("repo_url", repoUrl), {
            //   forceOptimisticNavigation: true,
            // });
            router.push(`/?repo_url=${repoUrl}`);
            // router.refresh();
          }}
        >
          <input
            className={styles.input}
            type={"text"}
            placeholder={"Enter a Github repo url"}
            pattern={
              "^(?:https://)?(?:www.)?github.com/([A-Za-z0-9_-]+/[A-Za-z0-9_.-]+)/?$"
            }
            required
            onChange={(e) => {
              setRepoUrl(e.target.value);
            }}
            // value={repoUrl ? repoUrl : fallBackUrl}
          />

          <button
            className={styles.button}
            disabled={status === "loading" ? true : false}
          >
            Click To Generate
          </button>
        </form>
        {queryUrl && (
          <>
            {status === "loading" && <p>Generating...</p>}
            <div
              className={styles.imgBox}
              style={{ display: status === "success" ? "block" : "none" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/api/getImage?repo_url=${queryUrl}`}
                width={"100%"}
                alt={"Repo Social Image"}
                fetchPriority="high"
                onLoad={() => setStatus("success")}
                onError={() => {
                  setStatus("error");
                  alert("Error generating image.");
                }}
              />
            </div>
            {status === "success" && (
              <div className={styles.buttonContainer}>
                <div className={styles.save}>
                  <a
                    download={"image.png"}
                    href={`/api/getImage?repo_url=${queryUrl}`}
                  >
                    💾
                  </a>
                </div>
                <div className={styles.copyContainer}>
                <button
                  onClick={handleCopy}
                  className={styles.copyBtn}
                  title="Copy URL"
                >
                  🔗
                </button>
                {copyStatus && (
                  <span className={styles.copyStatus}>{copyStatus}</span>
                )}
              </div>
              {/* <div className={styles.tweetContainer}>
                <a
                  href={`https://twitter.com/intent/tweet?text=Checkout my new github social image generated by github social image generator: ${
                    "https://webapi.johnversus.dev/api/generateGithubSocial?repo_url=" +
                    queryUrl
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.tweetBtn}
                >
                  🐦
                </a>
              </div> */}
              <div className={styles.starContainer}>
                <a
                  href={queryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.starBtn}
                  title="Star on GitHub"
                >
                  ⭐
                </a>
              </div>
            </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default About;
