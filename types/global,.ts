import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
    protected?: boolean;
};
export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};
