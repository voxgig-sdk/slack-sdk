package core

type SlackError struct {
	IsSlackError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewSlackError(code string, msg string, ctx *Context) *SlackError {
	return &SlackError{
		IsSlackError: true,
		Sdk:              "Slack",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *SlackError) Error() string {
	return e.Msg
}
