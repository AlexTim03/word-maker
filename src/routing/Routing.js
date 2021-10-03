import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Box, LinearProgress } from "@mui/material";
import { Layout } from '../components/Layout/Layout';

const Loader = () => (
    <Box
        sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
    >
        <Box>
            <LinearProgress variant="indeterminate" />
        </Box>
    </Box>
)

const MenuPage = lazy(() => import('../pages/menu/MenuPage'))
const NewGamePage = lazy(() => import('../pages/newGame/NewGamePage'))

export const Routing = () => (
    <Router>
        <Layout>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route exact path='/' component={MenuPage} />
                    <Route exact path='/new' component={NewGamePage} />
                </Switch>
            </Suspense>
        </Layout>
    </Router>
)