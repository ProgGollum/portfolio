'use client'

import { createTheme, Button} from '@mantine/core';
import s from "./mantine.module.scss"

export const theme = createTheme({
    components: {
        Button: Button.extend({
            classNames: {
                root: s.button__root
            }
        })
    }
})
