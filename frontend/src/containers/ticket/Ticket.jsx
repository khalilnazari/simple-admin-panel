import { useCallback, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { useDispatch } from "react-redux"
import { FormContainer, PageHeader, SelectInput, TextInput, Textarea } from "../../components"
import {
    updateTicketFailure,
    updateTicketStart,
    updateTicketSuccess,
    deleteTicketFailure,
    deleteTicketStart,
    deleteTicketSuccess
} from "../../redux/ticketSlice"

const Ticket = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const ticket = location?.state.ticket

    // state
    const [editInput, setEditInput] = useState(true)
    const [input, setInput] = useState({
        title: ticket.title || "",
        notes: ticket.notes || "",
        assginedTo: ticket.assginedTo || "",
        deadline: ticket.deadline || "",
        priority: ticket.priority || "",
        createdBy: ticket.createdBy || "Khalil Ahmad", // update later.
        status: ticket.state || "new",
        createdDate: ticket.createdBy || ""
    })

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
        dispatch(updateTicketStart())

        Swal.fire({
            icon: "warning",
            title: "Confirm ticket detail!",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, add user!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(updateTicketSuccess({ data: input, id: ticket.id }))

                if (true) {
                    Swal.fire("Saved!", "The user has been added.", "success")
                } else {
                    dispatch(updateTicketFailure())
                    Swal.fire("Opps!", "An error occured, please try again.", "error")
                }
            }
        })
    }

    // toggle form
    const handleEditForm = () => setEditInput((prev) => !prev)

    // handle delete
    const handleDelete = () => {
        dispatch(deleteTicketStart())
        Swal.fire({
            icon: "warning",
            title: "Confirm ticket delete!",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteTicketSuccess(ticket.id))

                if (true) {
                    Swal.fire("Saved!", "The user has been deleted.", "success")
                    navigate("/tickets")
                } else {
                    dispatch(deleteTicketFailure())
                    Swal.fire("Opps!", "An error occured, please try again.", "error")
                }
            }
        })
    }

    // jsx
    return (
        <div className="user">
            {/* Page title */}
            <PageHeader
                title="Ticket"
                editButtonText="Update ticket"
                handleEditForm={handleEditForm}
            />

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
                                editInput={editInput}
                            />

                            <Textarea
                                label="Description"
                                id="notes"
                                name="notes"
                                placeholder="Notes.."
                                value={input.notes}
                                handleValue={handleInputChange}
                                editInput={editInput}
                            />

                            <SelectInput
                                label="Asign to"
                                id="assginedTo"
                                name="assginedTo"
                                value={input.assginedTo}
                                handleValue={handleInputChange}
                                options={["1", "2", "3", "Jack bro"]}
                                errorMessage=""
                                editInput={editInput}
                            />

                            <TextInput
                                label="Deadline"
                                id="deadline"
                                type="date"
                                name="deadline"
                                placeholder="Enter email"
                                value={input.deadline}
                                handleValue={handleInputChange}
                                editInput={editInput}
                            />

                            <SelectInput
                                label="Priority"
                                id="priority"
                                name="priority"
                                value={input.priority}
                                handleValue={handleInputChange}
                                options={["high", "medium", "low"]}
                                errorMessage=""
                                editInput={editInput}
                            />
                        </div>

                        {/* buttons */}
                        {!editInput ? (
                            <div className="buttonControl">
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() => setEditInput((prev) => !prev)}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        ) : (
                            <div className="buttonControl">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => handleDelete()}
                                >
                                    Delete ticket
                                </button>
                            </div>
                        )}
                    </form>
                </FormContainer>
            </div>
        </div>
    )
}

export default Ticket
