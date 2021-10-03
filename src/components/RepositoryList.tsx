import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss"

// https://api.github.com/users/tsilva19/repos

const repository ={
  name: 'uniform 1',
  description: 'Form in React',
  link: 'https://github.com/tsilva19'
}

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/tsilva19/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [repositories])

  return (
    <section className="repository-list">
      <h1> Lista de repositórios</h1>
      <ul>
       {repositories.map(repository =>{
         return <RepositoryItem key={repository.name} repository={repository}/>
       }
       )}
       
      </ul>
    </section>
    
  );
}