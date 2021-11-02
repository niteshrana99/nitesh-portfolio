import React from 'react';
import angular from "../../assets/images/angular.svg";
import docker from "../../assets/images/docker.svg";
import git from "../../assets/images/git.svg";
import js from "../../assets/images/js.svg";
import mongo from "../../assets/images/mongo.svg";
import node from "../../assets/images/node.svg";
import react from "../../assets/images/react.svg";
import sass from "../../assets/images/sass.svg";
import ts from "../../assets/images/ts.svg";
import vscode from "../../assets/images/vscode.svg";
import html from "../../assets/images/html.svg";

const Stack = () => {
    const skillsImages = [js, ts, react, angular, docker, git, mongo, node, sass, vscode]
    return (
        <div className="stack">
            {skillsImages.map((imageSrc) => (
                <article className="stack_item">
                <img src={imageSrc} />
            </article>
            ))}
            
           
        </div>
    )
}

export default Stack
