import React from 'react'

const Project = (props) => {

    const { repo, link, description, language, stars, forks } = props.project

    return (
        <a href={link}>
            <article>
                <hgroup>
                    <h3>{repo}</h3>
                    <h4>{description}</h4>
                </hgroup>

                <span><b>Main Language:</b> {language}</span>
                <div className='grid'>
                    <span>{stars} ⭐</span>
                    <span>{forks} 🍴</span>
                </div>
            </article>
        </a>
    )
}

export default Project