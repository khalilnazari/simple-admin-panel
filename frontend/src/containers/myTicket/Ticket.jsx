import React from "react"
import { useRef } from "react"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { FormContainer, PageHeader, SelectInput, Textarea } from "../../components"
import "./Ticket.scss"

const Ticket = () => {
    const location = useLocation()
    const ticket = location?.state?.ticket
    const textareaReft = useRef()

    // state
    const [input, setInput] = useState({
        replyNote: "",
        status: ""
    })

    // check updaet field are not empty
    const canSave = Object.values(input).every(Boolean)

    // handle form change.
    const handleInputChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    // Got to update form
    const goUpateForm = () => {
        textareaReft.current.focus()
    }

    // handle submit update
    const handleUpdate = (e) => {
        e.preventDefault()
        console.log(input)
    }

    // Ticket Item component
    const TicketItem = ({ value, title }) => (
        <div className="tickeItem">
            <strong>{title}: </strong> {value}
        </div>
    )

    // jsx
    return (
        <div className="ticketDetail">
            {/* header */}
            <PageHeader
                title="Ticket"
                editButtonText="Update status"
                handleEditForm={goUpateForm}
            />

            {/* body */}
            <div className="ticketBody">
                <div>
                    <TicketItem title="Title" value={ticket.title} />
                    <TicketItem title="Notes" value={ticket.notes} />
                    <TicketItem title="Created By" value={ticket.createdBy} />
                    <TicketItem title="Assgined To" value={ticket.asignedTo} />
                    <TicketItem title="Created On" value={ticket.createdDate} />
                    <TicketItem title="Deadline" value={ticket.deadline} />
                    <TicketItem title="Status" value={ticket.status} />
                    <TicketItem title="Priority" value={ticket.priority} />
                </div>
            </div>

            {/* update form */}
            <div className="ticketBody">
                <FormContainer>
                    <form onSubmit={handleUpdate}>
                        <div className="inputContainer">
                            <Textarea
                                setRef={textareaReft}
                                label="Reply note"
                                id="replyNote"
                                name="replyNote"
                                placeholder="Write a reply"
                                value={input.replyNote}
                                handleValue={handleInputChange}
                            />

                            <SelectInput
                                label="Status"
                                id="status"
                                name="status"
                                value={input.status}
                                handleValue={handleInputChange}
                                options={["stack", "complete"]}
                                errorMessage=""
                            />
                        </div>

                        {/* buttons */}
                        <div className="buttonControl">
                            <button type="button" className="btn">
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-primary" disabled={!canSave}>
                                Submit
                            </button>
                        </div>
                    </form>
                </FormContainer>
            </div>
        </div>
    )
}

export default Ticket
