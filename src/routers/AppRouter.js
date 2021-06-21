import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";
import { JournalScrenn } from '../components/journal/JournalScrenn';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={AuthRouter} />
                    <Route exact path="/" component={JournalScrenn} />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
