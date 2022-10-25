import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { useDispatch } from "react-redux"
import { FormContainer, PageHeader, SelectInput, TextInput, Textarea } from "../../components"
import { addTicketStart, addTicketSuccess, addTicketFailure } from "../../redux/ticketSlice"

const TicketAdd = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const date = new Date()
    const today = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

    const [input, setInput] = useState({
        title: "",
        notes: "",
        assginedTo: "",
        deadline: "",
        priority: "",
        createdBy: "Khalil Ahmad", // update later.
        status: "new",
        createdDate: today
    })

    // confirm message
    const confirmHTML = `<div style="text-align:left">
        <p><strong>Ticket title: </strong> ${input.title}</p>
        <p><strong>Description: </strong>${input.notes}</p>
        <p><strong>Asgined to: </strong>${input.assginedTo}</p>
        <p><strong>Deadline: </strong>${input.deadline}</p>
        <p><strong>Priority: </strong>${input.priority}</p>
    </div>`

    // handle form change.
    const handleInputChange = useCallback(
        (e) => {
            setInput({ ...input, [e.target.name]: e.target.value })
        },
        [input]
    )

    // submit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)

        input.id = Math.random().toString(16).slice(2)
        dispatch(addTicketStart())

        Swal.fire({
            title: "Confirm ticket detail!",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, add user!",
            html: confirmHTML
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(addTicketSuccess(input))

                if (true) {
                    Swal.fire("Saved!", "The user has been added.", "success")
                } else {
                    dispatch(addTicketFailure())
                    Swal.fire("Opps!", "An error occured, please try again.", "error")
                }
            }
        })
    }

    // jsx
    return (
        <div className="user">
            {/* Page title */}
            <PageHeader title={`Create ticket`} />

            {/* Page body */}
            <div className="formWrapper">
                <FormContainer>
                    <form onSubmit={handleSubmit}>
                        <div className="inputContainer">
                            <TextInput
                                label="Ticket title"
                                id="title"
                                type="text"
                                name="title"
                                placeholder="Enter ticket title"
                                value={input.title}
                                handleValue={handleInputChange}
                            />

                            <Textarea
                                label="Description"
                                id="notes"
                                name="notes"
                                placeholder="Notes.."
                                value={input.notes}
                                handleValue={handleInputChange}
                            />

                            <SelectInput
                                label="Asign to"
                                id="assginedTo"
                                name="assginedTo"
                                value={input.assginedTo}
                                handleValue={handleInputChange}
                                options={["1", "2", "3"]}
                                errorMessage=""
                            />

                            <TextInput
                                label="Deadline"
                                id="deadline"
                                type="date"
                                name="deadline"
                                placeholder="Enter email"
                                value={input.deadline}
                                handleValue={handleInputChange}
                            />

                            <SelectInput
                                label="Priority"
                                id="priority"
                                name="priority"
                                value={input.priority}
                                handleValue={handleInputChange}
                                options={["high", "medium", "low"]}
                                errorMessage=""
                            />
                        </div>

                        {/* buttons */}
                        <div className="buttonControl">
                            <button type="button" onClick={() => navigate(-1)}>
                                Cancel
                            </button>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </FormContainer>
            </div>
        </div>
    )
}

export default TicketAdd
