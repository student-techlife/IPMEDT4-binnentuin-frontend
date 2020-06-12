import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './auth';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                // Show Component if authenticated
                // console.log(auth.isAuthenticated()); Denk dat het false is wanneer je gaat inloggen
                if (auth.isAuthenticated()) {
                    return <Component {...props} />;
                } else {
                    // Return user when not authenticated
                    return (
                        <Redirect
                            to={{
                                pathname: "/inloggen",
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    );
                }
            }}
        />
    );
};