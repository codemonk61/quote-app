import React from 'react'
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import QuoteList from '../molecules/QuoteList'
import CreateQuote from '../molecules/CreateQuote'
import PageWrapper from '../atoms/PageWrapper'
import Tabs from '../atoms/Tabs'
import Loader from '../atoms/Loader';

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

const QuotePage = (
    {isLoggin}
) => {

    const [selectedTab, setSelectedTab] = React.useState('create_quote')

    const handleTabChange = (key) => {
        setSelectedTab(key)
    }

    if(isLoggin){

        return <Loader/>
    }
    console.log(isLoggin,">>>>>>")
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
                <QuoteList />
            }
        </PageWrapper>
    )
}

export default QuotePage