import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Logo from '../../static/logo.svg'

import classes from '../styles/index.module.sass'

// a bit of a hack!

export default ({ data }) => {
    const siteMetadata = data.site.siteMetadata
    return (
        <Layout isHome>
            <Logo className={classes.logo} aria-label={siteMetadata.title} />
            <div style={{width: 800 + 'px', margin: 'auto'}}>
                <p>
                    Copyright (c) 2019, The Regents of the University of California, through Lawrence Berkeley National Laboratory (subject to receipt of any required approvals from the U.S. Dept. of Energy). All rights reserved.
                </p><p>
                    If you have questions about your rights to use or distribute this software, please contact Berkeley Lab's Innovation & Partnerships office at IPO@lbl.gov.
                </p><p>
                    NOTICE. This Software was developed under funding from the U.S. Department of Energy and the U.S. Government consequently retains certain rights. As such, the U.S. Government has been granted for itself and others acting on its behalf a paid-up, nonexclusive, irrevocable, worldwide license in the Software to reproduce, distribute copies to the public, prepare derivative works, and perform publicly and display publicly, and to permit other to do so.
                </p>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    {
        site {
            siteMetadata {
                title
            }
        }
    }
`
