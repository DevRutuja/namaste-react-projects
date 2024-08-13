// const heading = React.createElement("h1",{id:"heading"},"Hello world from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

{/* <div>
    <div>
        <h1>
            Hi i am h1
        </h1>
        <h2>
            Hi i am h2
        </h2>
    </div>
    <div>
        <h1>
            Hi i am h1
        </h1>
        <h2>
            Hi i am h2
        </h2>
    </div>
</div> */}

const nestedHeading = React.createElement("div",{},
   [ React.createElement("div",{},
    [React.createElement("h1",{id:"heading"}, "Hi i am h1"),
    React.createElement("h2",{id:"heading"}, "Hi i am h2")]),

    React.createElement("div",{},
    [React.createElement("h1",{id:"heading"}, "Hi i am h1"),
    React.createElement("h2",{id:"heading"}, "Hi i am h2")])]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedHeading);