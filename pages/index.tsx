import type { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";
import Latex from "react-latex-next";
import prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/plugins/command-line/prism-command-line.js";
import "prismjs/plugins/command-line/prism-command-line.css";

const Home: NextPage = () => {
    const codeSample = `curl https://get.reserver.sh | sh
./reserver.sh
Reserving 5GB of space...
Reservation complete!
./reserver.sh
Reservation file already exists. Delete? [y/N]: y
Reservation removed. Good luck!`;

    useEffect(() => {
        prism.highlightAll();
    }, []);

    return (
        <div>
            <Head>
                <title>Reserver</title>
                <meta
                    name="description"
                    content="A very mild contingency plan for servers that run out of space. "
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="p-5 md:my-12 max-w-3xl mx-auto">
                <h1 className="text-6xl">
                    <Latex>{"$\\R \\text{eserver}$"}</Latex>
                </h1>
                <div className="text-xl space-y-5">
                    <p>
                        A <span className="italic">very mild</span> contingency
                        plan for servers that run out of space. Based on this
                        great article by Brian Schrader:{" "}
                        <a
                            href="https://brianschrader.com/archive/why-all-my-servers-have-an-8gb-empty-file/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Why All My Servers Have An 8gb Empty File
                        </a>
                        .
                    </p>
                    <p>
                        Just like Schrader does in the article, this script will
                        reserve space on a server, so, you can delete it later.
                    </p>
                    <p>
                        Specifically, when your server runs out of space, you
                        can remove the reservation file this script produces so
                        that the server will hopefully have enough space to
                        function again while you try to fix whatever caused the
                        issue.
                    </p>
                    <p>
                        You should always use monitoring software and or SaaS
                        offerings such as{" "}
                        <a
                            href="https://www.datadoghq.com/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Datadog
                        </a>{" "}
                        to monitor disk usage on your servers. That is the tool
                        that will <span className="italic">really</span> help
                        you mitigate this potential problem. Think of
                        reserver.sh as a sidekick. It&apos;s simple to use and
                        is there if your primary tools somehow fail. It is a{" "}
                        <span className="italic">mild</span> contingency plan if
                        you can spare the disk space.
                    </p>
                    <h2 className="text-3xl">Installation & Basic Usage</h2>
                    <pre
                        className="command-line"
                        data-user="user"
                        data-host="remotehost"
                        data-output="3-4, 6-7"
                    >
                        <code className="language-bash">{codeSample}</code>
                    </pre>
                    <h2 className="text-3xl">Resources</h2>
                    <ul className="list-disc ml-5">
                        <li>
                            <a href="https://github.com/ceiphr/reserver#usage">
                                Documentation
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/ceiphr/reserver">
                                Reserver Source Code
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/ceiphr/get.reserver.sh">
                                Installation Script Source Code
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/ceiphr/reserver.sh">
                                Website Source Code
                            </a>
                        </li>
                    </ul>
                    <footer>
                        <p>
                            Copyright © 2021 Ari Birnbaum (
                            <a href="https://ceiphr.com/">Ceiphr</a>).
                        </p>
                        <p>
                            Reserver, it&apos;s installation script and this
                            website are all{" "}
                            <a href="https://github.com/ceiphr/reserver/blob/main/LICENSE">
                                MIT licensed
                            </a>
                            .
                        </p>
                    </footer>
                </div>
            </main>
        </div>
    );
};

export default Home;
