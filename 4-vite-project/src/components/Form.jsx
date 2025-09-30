import './Form.css'

const Form = () => {
    return <form>
                <div class="row mb-3">
                    <label for="fullName" class="col-sm-2 col-form-label">Full Name</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" id="fullName" placeholder="Enter your full name"/>
                    </div>
                </div>


                <div class="row mb-3">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email address</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" placeholder="Enter your email"/>
                    </div>
                </div>
                
                <div class="row mb-3">
                    <label for="age" class="col-sm-2 col-form-label">Age</label>
                    <div class="col-sm-10">
                    <input type="number" class="form-control" id="age" placeholder="Enter your age" />
                    </div>
                </div>

                <div class="col md-4">
                    <label for="grade" class="form-label">Grade</label>
                    <select id="grade" class="form-select">
                    <option selected>Select your grade</option>
                    <option>...</option>
                    </select>
                </div>

                <fieldset class="row mb-3">
                    <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                    <div class="col-sm-10">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                        <label class="form-check-label" for="gridRadios1">
                        Male
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                        <label class="form-check-label" for="gridRadios2">
                        Female
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                        <label class="form-check-label" for="gridRadios3">
                        Other
                        </label>
                    </div>
                    </div>
                </fieldset>
                <div class="row mb-3">
                    <div class="col-sm-10 offset-sm-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck1" />
                        <label class="form-check-label" for="gridCheck1">
                        I agree to the terms and conditions 
                        </label>
                    </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
}

export default Form;
