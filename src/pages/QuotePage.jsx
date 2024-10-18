import React from 'react'
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import QuoteList from '../molecules/QuoteList'
import CreateQuote from '../molecules/CreateQuote'
import PageWrapper from '../atoms/PageWrapper'
import Tabs from '../atoms/Tabs'

const styles = {
wrapper: css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap:12px;
     @media (max-width: 1232px){
        padding: 0px 12px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
     }

    @media (max-width: 960px){
         padding: 0px 12px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
     }

    @media (max-width: 680px){
         padding: 0px 12px;
        display: grid;
        grid-template-columns:  1fr;
     }
    
   `
}

const tabData = [
    {
        label: 'Create Quote',
        key: 'create_quote'
    },
    {
        label: 'Quote List',
        key: 'create_List'
    }
]

const QuotePage = () => {
    const [selectedTab, setSelectedTab] = React.useState('create_quote')
    const handleTabChange = (key) => {
        setSelectedTab(key)
    }
    return (

        <PageWrapper>
            <Tabs
                data={tabData}
                value={selectedTab}
                onChange={handleTabChange}
            />
            {selectedTab === 'create_quote'
                ?
                <div css={css`display: grid; place-items: center;`}>
                    <CreateQuote />
                </div>
                :
                <div css={styles.wrapper}>
                    <QuoteList />
                </div>
            }
        </PageWrapper>
    )
}

export default QuotePage