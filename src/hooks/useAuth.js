import {useContext} from 'react'
import { authContext } from '../Context/ContextApi';

function useAuth() {
    return useContext(authContext)
}

export default useAuth;
