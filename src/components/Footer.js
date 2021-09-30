import React from 'react'

const Footer = () => {
    return (
        <footer>
            <section className='grid'>
                <article>
                    <hgroup>
                        <h2>Find Me</h2>
                        <h3>Links to some important websites that I frequent.</h3>
                    </hgroup>

                    <ul>
                        {listLink('https://linkedin.com/ajromaniello', 'LinkedIn')}
                        {listLink('https://github.com/aj-rom', 'GitHub')}
                        {listLink('https://dev.com/ajrom', 'Blog')}
                    </ul>
                </article>

                <article>
                    <hgroup>
                        <h2>Contact</h2>
                        <h3>How to get in touch with me.</h3>
                    </hgroup>
                    <p>The best way to reach me is via email:</p>
                    <ul>
                        {listLink('mailto:ajromaniello@gmail.com?subject=Mail%20From%20Portfolio', 'ajromaniello@gmail.com')}
                    </ul>
                </article>
            </section>
        </footer>
    )
}

function listLink(link, text, props = {}) {
    return <li><a href={link} {...props}>{text}</a></li>
}

export default Footer