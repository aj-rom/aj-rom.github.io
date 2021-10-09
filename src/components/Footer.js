import React from 'react'

const Footer = () => {
    return (
        <footer id='footer'>
            <section className='grid'>
                <section>
                    <hgroup>
                        <h5>Find Me</h5>
                        <h6>Links to some important websites that I frequent.</h6>
                    </hgroup>
                    <ul>
                        {listLink('https://linkedin.com/ajromaniello', 'LinkedIn')}
                        {listLink('https://github.com/aj-rom', 'GitHub')}
                        {listLink('https://dev.com/ajrom', 'Blog')}
                    </ul>
                </section>

                <section>
                    <hgroup>
                        <h5>Contact</h5>
                        <h6>How to get in touch with me.</h6>
                    </hgroup>
                    <ul>
                        <li>The best way to reach me is via email:</li>
                        {listLink('mailto:ajromaniello@gmail.com?subject=Mail%20From%20Portfolio', 'ajromaniello@gmail.com')}
                    </ul>
                </section>
            </section>
        </footer>
    )
}

function listLink(link, text, props = {}) {
    return <li><a href={link} {...props}>{text}</a></li>
}

export default Footer