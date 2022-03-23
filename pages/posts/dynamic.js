import React from "react";
export default function Dynamic({ todos }) {
  return (
    <div>
      {todos &&
        todos.map((item) => {
          return (
            <>
              <h1>{item.title}</h1>
            </>
          );
        })}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos = await res.json();
  return {
    props: {
      todos,
    },
  };
}
