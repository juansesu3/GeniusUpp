import { Button } from '@/components/ui/button';
import React from 'react'
import Link from "next/link";

interface Props {
    
}

const LandingPage = (props: Props) => {
    return (
        <div>
            <h1>Landing page (Unprotected)</h1>
            <div>
                <Link href="/sign-in">
                    <Button>Login</Button>
                </Link>
                <Link href="/sign-up">
                    <Button>Register</Button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage; 
