const resultDetails = {
    "LII": { link: "types/lii.html" },
    "SEI": { link: "types/sei.html" },
    "ESE": { link: "types/ese.html" },
    "ILE": { link: "types/ile.html" },
    "IEI": { link: "types/iei.html" },
    "LSI": { link: "types/lsi.html" },
    "SLE": { link: "types/sle.html" },
    "EIE": { link: "types/eie.html" },
    "ESI": { link: "types/esi.html" },
    "ILI": { link: "types/ili.html" },
    "LIE": { link: "types/lie.html" },
    "SEE": { link: "types/see.html" },
    "SLI": { link: "types/sli.html" },
    "EII": { link: "types/eii.html" },
    "IEE": { link: "types/iee.html" },
    "LSE": { link: "types/lse.html" }
};

const fullResultKeys = Object.keys(resultDetails);

function shortFromFull(key) {
return key.split(' - ')[0].trim();
}

// results: array of short codes like "LII", "SEI", ...
const results = fullResultKeys.map(k => shortFromFull(k));

// Build a lookup keyed by short code for rendering links and labels
const resultDetailsShort = {};
fullResultKeys.forEach(k => {
const s = shortFromFull(k);
resultDetailsShort[s] = Object.assign({}, resultDetails[k], { label: k });
});

// Hardcoded questions and answers with custom color
const questions = [
    {
        caption: "Extraversion - Introversion (Stance)",
        color: "#e74a3b",
        answers: [
            { desc: "(I don't know)", subset: results },
            { desc: "My focus is on the world as it is, without reference to my personal opinion, so I am usually unbiased and change my opinion easily.", subset: ["ESE", "ILE", "SLE", "EIE", "LIE", "SEE", "IEE", "LSE"] },
            { desc: "My focus is not just on something, but first and foremost on what that something means to me personally, so I am often biased and subjective, and my opinion changes with difficulty.", subset: ["LII", "SEI", "IEI", "LSI", "ESI", "ILI", "SLI", "EII"] },
        ]
    },
    {
        caption: "Sensory - Intuition",
        color: "#e74a3b",
        answers: [
            { desc: "(I don't know)", subset: results },
            { desc: "I'm good at dealing with things I can see or touch.", subset: ["SEI", "ESE", "LSI", "SLE", "ESI", "SEE", "SLI", "LSE"] },
            { desc: "I am good at solving abstract, ill-defined problems.", subset: ["LII", "ILE", "IEI", "EIE", "ILI", "LIE", "EII", "IEE"] },
        ]
    },
    {
        caption: "Ethics - Logic",
        color: "#e74a3b",
        answers: [
            { desc: "(I don't know)", subset: results },
            { desc: "I think more about specific people who surround me. I'm more interested in the question Who? Even if I think about some abstract things, phenomena and processes, I still keep in mind questions like Who did this? Who benefits from this? What do they want from me? etc.", subset: ["SEI", "ESE", "IEI", "EIE", "ESI", "SEE", "EII", "IEE"] },
            { desc: "I think more about abstract rules, phenomena and processes. I'm more interested in the question What? Even if I think about some specific people, I still keep in mind questions like Which group does he belong to? What are his principles? What and how does he do? etc.", subset: ["LII", "ILE", "LSI", "SLE", "ILI", "LIE", "SLI", "LSE"] },
        ]
    },
    {
        caption: "Irrationality - Rationality",
        color: "#e74a3b",
        answers: [
            { desc: "(I don't know)", subset: results },
            { desc: "It is important for me to maintain my perception as a whole, and actions interrupt it, so in my perception I am stable, but in my actions I am impulsive and do not like long, repetitive actions.", subset: ["SEI", "ILE", "IEI", "SLE", "ILI", "SEE", "SLI", "IEE"] },
            { desc: "It is important for me that my actions are consistent, and perception is confusing, so I don't like to be distracted by something urgent that needs to be immediately analyzed and coordinated with my actions.", subset: ["LII", "ESE", "LSI", "EIE", "ESI", "LIE", "EII", "LSE"] },
        ]
    },
    {
        caption: "Statics - Dynamics",
        color: "#e74a3b",
        answers: [
            { desc: "(I don't know)", subset: results },
            { desc: "In the process of thinking, I usually outline the boundaries of what is reasonable and important, beyond which I do not go, and then I work only within them, without being distracted by unimportant things. I switch between such frames abruptly.", subset: ["LII", "ILE", "LSI", "SLE", "ESI", "SEE", "EII", "IEE"] },
            { desc: "In the process of thinking, I usually don't limit myself, I don't discard unnecessary things, because there is nothing superfluous, so it flows smoothly. If any individual frames appear in my thinking, I rather skim through them and focus on their transformation and connections, rather than on looking closely.", subset: ["SEI", "ESE", "IEI", "EIE", "ILI", "LIE", "SLI", "LSE"] },
        ]
    },
    {
        caption: "Questimity - Declatimity",
        color: "#e74a3b",
        answers: [
            { desc: "(I don't know)", subset: results },
            { desc: "I'm more of an individual than a part of a team. I am often dissatisfied with someone or something, pointing out shortcomings, criticizing and asking uncomfortable questions.", subset: ["LII", "ILE", "IEI", "EIE", "ESI", "SEE", "SLI", "LSE"] },
            { desc: "I'm more of a team player than a cat that walks by itself. I'm more of a creator than a critic, and if someone doesn't like something about me or what I do, that's their problem.", subset: ["SEI", "ESE", "LSI", "SLE", "ILI", "LIE", "EII", "IEE"] },
        ]
    },
    {
        caption: "Decisiveness - Judiciousness",
        color: "#e74a3b",
        answers: [
            { desc: "(I don't know)", subset: results },
            { desc: "I am usually confident in my perception of the situation and environment, so I see no point in discussing my choice. I worry more about whether I will be able to realize my plans and achieve my goals, whether someone or something will interfere with me, and whether I will be able to overcome all the obstacles in my path. I could even go to church to pray about an important matter, if only everything would be successful.", subset: ["IEI", "LSI", "SLE", "EIE", "ESI", "ILI", "LIE", "SEE"] },
            { desc: "I am usually confident in my actions, so I am not interested in discussing the details of my path to my goal. There is nothing sublime in my actions, I do not carry a cross. I think more about whether I correctly perceive the structure of the environment in which I am, and whether my goal is worthwhile.", subset: ["LII", "SEI", "ESE", "ILE", "SLI", "EII", "IEE", "LSE"] },
        ]
    },
    {
        caption: "Merry - Serious",
        color: "#e74a3b",
        answers: [
            { desc: "(I don't know)", subset: results },
            { desc: "I am open to simple human communication and do not hate when someone shares their emotions or details about their personal life with others. I see society as a collection of people communicating with each other, in which the most important is the one whose word remains last or at least is heard by the largest possible number of people. I find it unpleasant when dry calculations are put above universal human values.", subset: ["LII", "SEI", "ESE", "ILE", "IEI", "LSI", "SLE", "EIE"] },
            { desc: "I am open to participating in collaborative work activities and dislike it when emotions are exposed. I see society as a collection of people performing their function, in which the most important is the one who determines the entire chain of actions or at least can influence the way the actions of as many people as possible are performed. I hate it when rationally organized activities are destroyed for sentimental reasons.", subset: ["ESI", "ILI", "LIE", "SEE", "SLI", "EII", "IEE", "LSE"] },
        ]
    },
    {
        caption: "Negativism - Positivism",
        color: "#e74a3b",
        answers: [
            { desc: "(I don't know)", subset: results },
            { desc: "My thinking is as smooth as a symphony.", subset: ["LII", "SEI", "SLE", "EIE", "ESI", "ILI", "IEE", "LSE"] },
            { desc: "My thinking is paradoxical like jazz.", subset: ["ESE", "ILE", "IEI", "LSI", "LIE", "SEE", "SLI", "EII"] },
        ]
    },
    {
        caption: "Process - Result",
        color: "#e74a3b",
        answers: [
            { desc: "(I don't know)", subset: results },
            { desc: "While doing something familiar, I am ready to try the seemingly illogical, which, however, helps to reveal new facets of the problem and expand the scope of my activity.", subset: ["SEI", "ILE", "LSI", "EIE", "ILI", "SEE", "EII", "LSE"] },
            { desc: "When doing something familiar, I just do everything as usual, which helps me quickly close the issue and move on to the next problem.", subset: ["LII", "ESE", "IEI", "SLE", "ESI", "LIE", "SLI", "IEE"] },
        ]
    },
    {
        caption: "Carelessness - Foresight",
        color: "#e74a3b",
        answers: [
            { desc: "(I don't know)", subset: results },
            { desc: "I have one of two things: 1) I quickly get fired up, throw all my energy into solving some issue (and I have a lot of energy, since I am an extrovert), and then I burn out and can't do anything else 2) I behave so intelligently that sometimes I break down and purposely do stupid things, simply because it's already unbearable to remain so correct (an introvert).", subset: ["SEI", "ILE", "LSI", "EIE", "ESI", "LIE", "SLI", "IEE"] },
            { desc: "I'm confused by what I read above.", subset: ["LII", "ESE", "IEI", "SLE", "ILI", "SEE", "EII", "LSE"] },
        ]
    },
    {
        "caption": "Aristocracy - Democracy (as the level of abstraction of the Ego block)",
        "color": "#e74a3b",
        "answers": [
            { desc: "(I don't know)", subset: results },
            {
                "desc": "The things that are the focus of my attention and the methods with which I solve the problem usually do not coincide in terms of abstractness. I either use abstract models and methods to work with concrete things and people, or I create things and emotions/relationships guided by abstract principles.",
                "subset": [
                    "IEI",
                    "SLE",
                    "LSI",
                    "EIE",
                    "SLI",
                    "IEE",
                    "EII",
                    "LSE",
                ]
            },
            {
                "desc": "The things that are the focus of my attention and the methods by which I solve the problem usually coincide in terms of abstractness. I either do completely speculative things, or I just completely immerse myself in the world of things and people around me.",
                "subset": [
                    "LII",
                    "ESE",
                    "SEI",
                    "ILE",
                    "ESI",
                    "LIE",
                    "ILI",
                    "SEE"
                ]
            }
        ]
    },
    {
        "caption": "Aristocracy - Democracy (as transientness of the Ego block)",
        "color": "#e74a3b",
        "answers": [
            { desc: "(I don't know)", subset: results },
            {
                "desc": "Both the things that are in the focus of my attention and the methods by which I solve the problem coincide in terms of repeatability. Either I solve standard problems using standard methods, or I find situational solutions to non-standard problems.",
                "subset": [
                    "IEI",
                    "SLE",
                    "LSI",
                    "EIE",
                    "SLI",
                    "IEE",
                    "EII",
                    "LSE",
                ]
            },
            {
                "desc": "I often use standard methods to solve non-standard problems, or I often look for non-standard, situational solutions to repetitive problems.",
                "subset": [
                    "LII",
                    "ESE",
                    "SEI",
                    "ILE",
                    "ESI",
                    "LIE",
                    "ILI",
                    "SEE"
                ]
            }
        ]
    },
    {
        "caption": "Emotivism - Constructivism",
        "color": "#e74a3b",
        "answers": [
            { desc: "(I don't know)", subset: results },
            {
                "desc": "In a conversation, I first establish emotional contact, and then get down to business.",
                "subset": [
                    "LII",
                    "IEI",
                    "LSI",
                    "LIE",
                    "SEI",
                    "SEE",
                    "LSE",
                    "IEE",
                ]
            },
            {
                "desc": "In a conversation, I immediately get to the point, and tune in to the general emotional wave only later.",
                "subset": [
                    "ILE",
                    "ESE",
                    "SLE",
                    "EIE",
                    "ESI",
                    "ILI",
                    "EII",
                    "SLI",
                ]
            }
        ]
    },
    {
        "caption": "Tactics - Strategy",
        "color": "#e74a3b",
        "answers": [
            { desc: "(I don't know)", subset: results },
            {
                "desc": "When getting to know someone superficially, I am more likely to start the conversation by discussing my surroundings, things, or personal tastes rather than ideas or scenarios.",
                "subset": [
                    "ESE",
                    "ILE",
                    "LSI",
                    "IEI",
                    "ESI",
                    "ILI",
                    "LSE",
                    "IEE"
                ]
            },
            {
                "desc": "With superficial contact with the interlocutor, I would rather start the conversation by discussing ideas, assumptions, scenarios, rather than things.",
                "subset": [
                    "SEI",
                    "LII",
                    "SLE",
                    "EIE",
                    "SEE",
                    "LIE",
                    "SLI",
                    "EII",
                ]
            }
        ]
    },
    {
        "caption": "Stubbornness - Compliance",
        "color": "#e74a3b",
        "answers": [
            { desc: "(I don't know)", subset: results },
            {
                "desc": "My life is a story of struggling with my own weaknesses.",
                "subset": [ "LII", "ESE", "LSI", "EIE", "ILI", "SEE", "SLI", "IEE" ]
            },
            {
                "desc": "What?",
                "subset": [ "SEI", "ILE", "IEI", "SLE", "ESI", "LIE", "EII", "LSE" ]
            },
        ]
    },

    {
        caption: "Quadras",
        color: "#16a085",
        answers: [
            { desc: "(I don't know)", subset: results },
            { desc: "It would be easy for me to communicate and I would be accepted in a democratic, collaborative environment where new ideas can be discussed without getting bogged down in the routine and boring details of their implementation.", subset: ["LII", "SEI", "ESE", "ILE"] },
            { desc: "It would be easy for me to communicate and I would be accepted in a close-knit team, where deep faith in the truth of our common beliefs allows us to bring them to life in spite of everything.", subset: ["IEI", "LSI", "SLE", "EIE"] },
            { desc: "It would be easy for me to communicate and I would be accepted in a democratic, competitive environment where the ability to implement an idea into something reasonable, tangible and useful is valued.", subset: ["ESI", "ILI", "LIE", "SEE"] },
            { desc: "It would be easy for me to communicate and I would be accepted into a close-knit team that solves various practical problems using already known and proven methods.", subset: ["SLI", "EII", "IEE", "LSE"] },
        ]
    },

    {
        caption: "Primary Concreteness - Abstraction",
        color: "#3498db",
        answers: [
            { desc: "(I don't know)", subset: results },
            { desc: "The focus of my perception is specific material objects or specific people.", subset: ["SEI", "ESE", "SLE", "EIE", "ESI", "SEE", "SLI", "EII"] },
            { desc: "The focus of my perception is abstract patterns, rules, sequences of actions, phenomena, connections, stories, goals and meanings.", subset: ["LII", "ILE", "IEI", "LSI", "ILI", "LIE", "IEE", "LSE"] },
        ]
    },
    {
        "caption": "Primary Reproducibility - Transientness",
        "color": "#3498db",
        "answers": [
            { desc: "(I don't know)", subset: results },
            {
                "desc": "The focus of my perception is constantly the same - things and concepts that I use again and again in exactly the same way as I did before.",
                "subset": [
                    "SEE",
                    "SLE",
                    "SEI",
                    "SLI",
                    "LSE",
                    "LIE",
                    "LSI",
                    "LII"
                ]
            },
            {
                "desc": "Every time the focus of my perception is something new - new dialogues with (the same) people or new manifestations of (the same) global concepts.",
                "subset": [
                    "ESE",
                    "EIE",
                    "ESI",
                    "EII",
                    "IEE",
                    "ILE",
                    "IEI",
                    "ILI"
                ]
            }
        ]
    },
    {
        "caption": "Secondary Concreteness - Abstraction (Beautiful - Smart)",
        "color": "#3498db",
        "answers": [
            { desc: "(I don't know)", subset: results },
            {
                "desc": "If I have to choose between beautiful and smart, I will be in the beautiful camp. I know how to present myself beautifully.",
                "subset": [
                    "SEE",
                    "SEI",
                    "ESE",
                    "ESI",
                    "LSE",
                    "LSI",
                    "IEE",
                    "IEI"
                ]
            },
            {
                "desc": "I'm more in the camp of smart than beautiful. I know how to leave such an impression about myself.",
                "subset": [
                    "SLE",
                    "SLI",
                    "EIE",
                    "EII",
                    "LIE",
                    "LII",
                    "ILE",
                    "ILI"
                ]
            }
        ]
    },
    {
        "caption": "Secondary Reproducibility - Transientness",
        "color": "#3498db",
        "answers": [
            { desc: "(I don't know)", subset: results },
            {
                "desc": "I love and know how to create repeatable things: rules, laws, style, fashion, that is, something that everyone should follow and repeat after me.",
                "subset": [
                    "SLE",
                    "SLI",
                    "ESE",
                    "ESI",
                    "LSE",
                    "LSI",
                    "ILE",
                    "ILI"
                ]
            },
            {
                "desc": "I love and know how to create something unique: emotions, moods, attitudes, aspirations, ideas, hypotheses, insights, opportunities, everything that has not yet been put on the assembly line.",
                "subset": [
                    "SEE",
                    "SEI",
                    "EIE",
                    "EII",
                    "LIE",
                    "LII",
                    "IEE",
                    "IEI"
                ]
            }
        ]
    },
    {
        "caption": "Alphaism - Gammism",
        "color": "#3498db",
        "answers": [
            { desc: "(I don't know)", subset: results },
            {
                "desc": "If I want changes in something, I mean that they should be quick and significant.",
                "subset": [
                    "LII",
                    "ESE",
                    "ILE",
                    "SEI",
                    "EIE",
                    "LSI",
                    "IEE",
                    "SLI",
                ]
            },
            {
                "desc": "If I want change, I usually mean gradual transformation.",
                "subset": [
                    "LIE",
                    "SEE",
                    "ESI",
                    "ILI",
                    "SLE",
                    "IEI",
                    "EII",
                    "LSE",
                ]
            }
        ]
    },
    {
        "caption": "Betanism - Deltaism",
        "color": "#3498db",
        "answers": [
            { desc: "(I don't know)", subset: results },
            {
                "desc": "When faced with obstacles, I tend to persist and continue with my usual actions.",
                "subset": [
                    "EIE",
                    "SLE",
                    "IEI",
                    "LSI",
                    "LII",
                    "ESE",
                    "SEE",
                    "ILI"
                ]
            },
            {
                "desc": "When I encounter obstacles, I try to look at the problem from a different angle.",
                "subset": [
                    "IEE",
                    "SLI",
                    "EII",
                    "LSE",
                    "ILE",
                    "SEI",
                    "LIE",
                    "ESI",
                ]
            }
        ]
    },
    {
        "caption": "Simple - Artsy",
        "color": "#3498db",
        "answers": [
            { desc: "(I don't know)", subset: results },
            {
                "desc": "I'm unlikely to be invited to a ball: I'm either an introvert who likes abstract tasks or an extrovert who likes working with physical things or people.",
                "subset": [
                    "LII",
                    "ESE",
                    "ILI",
                    "SEE",
                    "IEE",
                    "SLI",
                    "EII",
                    "LSE",

                ]
            },
            {
                "desc": "If they don't, they'll be missing out: I'm either an introvert who thinks deeply about aesthetics, beauty, and people, or an extrovert who enjoys intellectual discussions.",
                "subset": [
                    "ILE",
                    "SEI",
                    "IEI",
                    "SLE",
                    "EIE",
                    "LSI",
                    "LIE",
                    "ESI",
                ]
            }
        ]
    },
    {
        "caption": "Hedgehogs - Foxes",
        "color": "#3498db",
        "answers": [
            { desc: "(I don't know)", subset: results },
            {
                "desc": "I believe in what I say and usually just express my opinion.",
                "subset": [
                    "SEI",
                    "LII",
                    "IEI",
                    "EII",
                    "ESE",
                    "ILE",
                    "SLE",
                    "LSE",

                ]
            },
            {
                "desc": "Bluffing is a great technique that I often use.",
                "subset": [
                    "LSI",
                    "ESI",
                    "ILI",
                    "SLI",
                    "EIE",
                    "LIE",
                    "SEE",
                    "IEE",
                ]
            }
        ]
    },

    {
        caption: "Base communication style",
        color: "#fd7e14",
        answers: [
            { desc: "(I don't know)", subset: results },
            { desc: "My main communication style can be called skeptical. I tend to criticize and question the appropriateness and reasonableness of any actions.", subset: ["LII", "ESI"] },
            { desc: "My main communication style can be called desperate. I tend to charge with confidence in the success of any action, pushing my followers towards it.", subset: ["ESE", "LIE"] },
            { desc: "My main communication style can be called delicate. I tend to maintain a positive atmosphere of respectful dialogue between equals and worthy people.", subset: ["SEI", "ILI"] },
            { desc: "My main communication style can be called shameless. I tend to communicate as if everything is allowed to me. And I have the right to express whatever I consider necessary!", subset: ["ILE", "SEE"] },
            { desc: "My main communication style can be called conserned. I tend to point out to others possible problems in the future, prudently warning about possible difficulties.", subset: ["IEI", "SLI"] },
            { desc: "My main communication style can be called carefree. It's common for me to say that you need to do everything, try everything and enjoy all the joys of life.", subset: ["SLE", "IEE"] },
            { desc: "My main communication style can be called detached. I tend to keep my distance and advise others to also stay away from various dubious individuals.", subset: ["LSI", "EII"] },
            { desc: "My main communication style can be called annoying. I tend to catch some wally and nag, nag, nag until he gives up and does what I think is necessary.", subset: ["EIE", "LSE"] },
        ]
    },
    {
        caption: "Creative communication style",
        color: "#fd7e14",
        answers: [
            { desc: "(I don't know)", subset: results },
            { desc: "When I need to convey some important idea to my interlocutor, my communication style becomes desperate.", subset: ["LII", "ESI"] },
            { desc: "When I need to convey some important idea to my interlocutor, my communication style becomes skeptical.", subset: ["ESE", "LIE"] },
            { desc: "When I need to convey some important idea to my interlocutor, my communication style becomes shameless.", subset: ["SEI", "ILI"] },
            { desc: "When I need to convey some important idea to my interlocutor, my communication style becomes delicate.", subset: ["ILE", "SEE"] },
            { desc: "When I need to convey some important idea to my interlocutor, my communication style becomes carefree.", subset: ["IEI", "SLI"] },
            { desc: "When I need to convey some important idea to my interlocutor, my communication style becomes concerned.", subset: ["SLE", "IEE"] },
            { desc: "When I need to convey some important idea to my interlocutor, my communication style becomes annoying.", subset: ["LSI", "EII"] },
            { desc: "When I need to convey some important idea to my interlocutor, my communication style becomes detached.", subset: ["EIE", "LSE"] },
        ]
    },
    {
        caption: "Suggestive communication style",
        color: "#fd7e14",
        answers: [
            { desc: "(I don't know)", subset: results },
            { desc: "I will involuntarily pay attention if something is expressed in a detached style.", subset: ["LII", "ESI"] },
            { desc: "I will involuntarily pay attention if something is expressed in an annoying style.", subset: ["ESE", "LIE"] },
            { desc: "I will involuntarily pay attention if something is expressed in a concerned style.", subset: ["SEI", "ILI"] },
            { desc: "I will involuntarily pay attention if something is expressed in a carefree style.", subset: ["ILE", "SEE"] },
            { desc: "I will involuntarily pay attention if something is expressed in a delicate style.", subset: ["IEI", "SLI"] },
            { desc: "I will involuntarily pay attention if something is expressed in a shameless style.", subset: ["SLE", "IEE"] },
            { desc: "I will involuntarily pay attention if something is expressed in a skeptical style.", subset: ["LSI", "EII"] },
            { desc: "I will involuntarily pay attention if something is expressed in a desperate style.", subset: ["EIE", "LSE"] },
        ]
    },
    {
        caption: "Activating communication style",
        color: "#fd7e14",
        answers: [
            { desc: "(I don't know)", subset: results },
            { desc: "For some reason, the team I supervise has a shameless style of communication.", subset: ["LII", "ESI"] },
            { desc: "For some reason, the team I supervise has a delicate style of communication.", subset: ["ESE", "LIE"] },
            { desc: "For some reason, the team I supervise has a desperate style of communication.", subset: ["SEI", "ILI"] },
            { desc: "For some reason, the team I supervise has a skeptical style of communication.", subset: ["ILE", "SEE"] },
            { desc: "For some reason, the team I supervise has an annoying style of communication.", subset: ["IEI", "SLI"] },
            { desc: "For some reason, the team I supervise has a detached style of communication.", subset: ["SLE", "IEE"] },
            { desc: "For some reason, the team I supervise has a carefree style of communication.", subset: ["LSI", "EII"] },
            { desc: "For some reason, the team I supervise has a concerned style of communication.", subset: ["EIE", "LSE"] },
        ]
    },
    {
        caption: "Missing style of communication",
        color: "#fd7e14",
        answers: [
            { desc: "(I don't know)", subset: results },
            { desc: "It is impossible to imagine me communicating in an annoying style.", subset: ["LII", "ESI"] },
            { desc: "It is impossible to imagine me communicating in a detached style.", subset: ["ESE", "LIE"] },
            { desc: "It is impossible to imagine me communicating in a careless style.", subset: ["SEI", "ILI"] },
            { desc: "It is impossible to imagine me communicating in a concerned style.", subset: ["ILE", "SEE"] },
            { desc: "It is impossible to imagine me communicating in a shameless style.", subset: ["IEI", "SLI"] },
            { desc: "It is impossible to imagine me communicating in a delicate style.", subset: ["SLE", "IEE"] },
            { desc: "It is impossible to imagine me communicating in a desperate style.", subset: ["LSI", "EII"] },
            { desc: "It is impossible to imagine me communicating in a skeptical style.", subset: ["EIE", "LSE"] },
        ]
    },
];

// State: selected answer index for each question
let selectedAnswers = Array(questions.length).fill(0);
let currentResults = [...results];

function renderQuestions() {
    $('#questions').empty();
    questions.forEach((q, qi) => {
        const section = $('<div class="question-section"></div>');
        section.append(`<div class="question-color-bar" style="background:${q.color}"></div>`);
        section.append(`<h5>${q.caption}</h5>`);
        q.answers.forEach((a, ai) => {
            const answerId = `q${qi}_a${ai}`;
            const checked = selectedAnswers[qi] === ai ? 'checked' : '';
            const labelClass = ai === 0 ? 'form-check-label default-answer' : 'form-check-label';
            const radioClass = ai === 0 ? 'form-check-input default-radio' : 'form-check-input';
            section.append(`
                    <div class="form-check${ai === 0 ? ' default-radio' : ''}">
                        <input class="${radioClass}" type="radio" name="q${qi}" id="${answerId}" value="${ai}" ${checked}>
                        <label class="${labelClass}" for="${answerId}">
                            ${a.desc}
                        </label>
                        <span class="answer-subset">
                            <i class="bi bi-arrow-return-right"></i>
                            ${a.subset.length === results.length ? 'All types' : a.subset.join(', ')}
                        </span>
                    </div>
                `);
        });
        $('#questions').append(section);
    });
}

function updateResultsAndSyncAnswers() {
    let subset = [...results];
    selectedAnswers.forEach((ai, qi) => {
        subset = subset.filter(r => questions[qi].answers[ai].subset.includes(r));
    });
    currentResults = subset;
    $('#results').html(currentResults.length ? currentResults.map(r =>
        `<a href="${resultDetailsShort[r].link}" title="${resultDetailsShort[r].label}" style="color:#0d6efd;text-decoration:none;display:block;padding:3px8px;border-radius:4px" onmouseover="this.style.backgroundColor='rgba(13,110,253,0.1)'" onmouseout="this.style.backgroundColor='transparent'">${resultDetailsShort[r].label}</a>`
    ).join('') : 'No matching types');

    let changed = false;
    questions.forEach((q, qi) => {
        if (selectedAnswers[qi] !== 0) return;

        let found = false;
        for (let ai = 1; ai < q.answers.length; ai++) {
            const a = q.answers[ai];
            if (currentResults.every(r => a.subset.includes(r))) {
                if (selectedAnswers[qi] !== ai) {
                    selectedAnswers[qi] = ai;
                    changed = true;
                }
                found = true;
                break;
            }
        }
        if (!found && selectedAnswers[qi] !== 0) {
            selectedAnswers[qi] = 0;
            changed = true;
        }
    });

    if (changed) {
        renderQuestions();
    }
}

// Initialize when DOM is ready
$(document).ready(function() {
    // Initial render
    renderQuestions();
    $('#results').html(currentResults.map(r =>
        `<a href="${resultDetailsShort[r].link}" title="${resultDetailsShort[r].label}" style="color:#0d6efd;text-decoration:none;display:block;padding:3px8px;border-radius:4px" onmouseover="this.style.backgroundColor='rgba(13,110,253,0.1)'" onmouseout="this.style.backgroundColor='transparent'">${resultDetailsShort[r].label}</a>`
    ).join(''));

    // Handle answer selection
    $(document).on('change', '.form-check-input', function () {
        const name = $(this).attr('name');
        const qi = parseInt(name.substring(1));
        const ai = parseInt($(this).val());
        selectedAnswers[qi] = ai;

        let possibleTypes = [...results];
        selectedAnswers.forEach((selAi, selQi) => {
            possibleTypes = possibleTypes.filter(r => questions[selQi].answers[selAi].subset.includes(r));
        });

        if (possibleTypes.length === 0) {
            possibleTypes = questions[qi].answers[ai].subset.slice();
        }

        questions.forEach((q, idx) => {
            let found = false;
            for (let aj = 1; aj < q.answers.length; aj++) {
                if (possibleTypes.every(t => q.answers[aj].subset.includes(t))) {
                    if (selectedAnswers[idx] !== aj) {
                        selectedAnswers[idx] = aj;
                    }
                    found = true;
                    break;
                }
            }
            if (!found && selectedAnswers[idx] !== 0) {
                selectedAnswers[idx] = 0;
            }
        });

        currentResults = possibleTypes;
        $('#results').html(currentResults.length ? currentResults.map(r =>
            `<a href="${resultDetailsShort[r].link}" title="${resultDetailsShort[r].label}" style="color:#0d6efd;text-decoration:none;display:block;padding:3px8px;border-radius:4px" onmouseover="this.style.backgroundColor='rgba(13,110,253,0.1)'" onmouseout="this.style.backgroundColor='transparent'">${resultDetailsShort[r].label}</a>`
        ).join('') : 'No matching types');
        renderQuestions();
    });

    // Reset button
    $('#resetBtn').click(function () {
        selectedAnswers = Array(questions.length).fill(0);
        currentResults = [...results];
        renderQuestions();
        $('#results').html(currentResults.map(r =>
            `<a href="${resultDetailsShort[r].link}" title="${resultDetailsShort[r].label}" style="color:#0d6efd;text-decoration:none;display:block;padding:3px8px;border-radius:4px" onmouseover="this.style.backgroundColor='rgba(13,110,253,0.1)'" onmouseout="this.style.backgroundColor='transparent'">${resultDetailsShort[r].label}</a>`
        ).join(''));
    });
});
