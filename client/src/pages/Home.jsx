import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Dashboard from '../components/Dashboard/Dashboard';

export default function Home() {
    return(
        <>
            <MainLayout>
                <Dashboard />
            </MainLayout>
        </>
    )
}