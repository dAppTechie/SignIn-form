const styles = theme => ({
    main: {
        width: "auto",
        margin: "auto",
        [theme.breakpoints.up("sm")]: {
            width:400,
            marginLeft: "auto",
            martginRight: "auto"
        }
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%",
        marginTop: theme.spacing.unit * 3
    },
    submit: {
        marginTop: theme.spacing.unit + 3,
    }
})

export default styles;