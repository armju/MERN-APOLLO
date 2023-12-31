import { useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../graphql/projects';
import { ProjectCard } from './ProjectCard';
import React from 'react'

export function ProjectList() {

   const {loading, error, data} =  useQuery(GET_PROJECTS);

   if (loading) {
    return <p>Loading</p>
   }

   if (error) {
    return <p>Error</p>
   }
   console.log(data);

    return <div>
        {
            data.projects.map(project => (
                <ProjectCard key={ project._id} project/>
            ))
        }

    </div>;
}


