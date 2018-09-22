import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';
import uid from 'uuid';

/* eslint react/forbid-prop-types: 0 */
export class AutoSuggestUser extends React.Component {
    static propTypes = {
        users: PropTypes.array.isRequired,
        value: PropTypes.string.isRequired,
        // onUserSelected: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            users: this.props.users || [],
            value: this.props.value,
            // usersInputProps: {
            //     placeholder: 'Select the user',
            //     value: '',
            //     onChange: this.onUserChange,
            //     className: 'form-control',
            // },
        };
    }

    onDropDown = () => {
        const component = this.autoSuggestRef;
        component.input.focus();
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue,
        });
    };

    onSuggestionsFetchRequested = () => ({ value }) => {
        this.setState({
            users: this.getSuggestions(value),
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            users: [],
        });
    };

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? this.props.users : this.props.users.filter(user =>
            user.email.toString().toLowerCase().includes(inputValue));
    };

    getSuggestionValue = suggestion =>
        suggestion.fullname
    ;


    alwaysRender = () => true;

    // Highlighted matches
    renderUserSuggestion = (suggestion, { query }) => {
        const matches = AutosuggestHighlightMatch(suggestion.fullname, query);
        const parts = AutosuggestHighlightParse(suggestion.fullname, matches);

        return this.renderSuggestion(parts);
    };

    renderSuggestion = (parts) => (
        <span>
            {parts.map((part) => {
                const className = part.highlight ? 'react-autosuggest__suggestion-match' : null;

                return (
                    <span className={className} key={uid()}>
                        {part.text}
                    </span>
                );
            })}
        </span>
    );

    render() {
        const { value, users } = this.state;
        console.log('>>>> users', users);
        console.log('>>>> users 1', this.props.users);
        // const { users } = this.props;

        const inputProps = {
            placeholder: 'Type a programming language',
            value,
            onChange: this.onChange,
        };

        return (
            <React.Fragment>
                <Autosuggest
                    ref={(input) => { this.autoSuggestRef = input; }}
                    suggestions={users}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={this.getSuggestionValue}
                    renderSuggestion={this.renderUserSuggestion}
                    shouldRenderSuggestions={this.alwaysRender}
                    inputProps={inputProps}
                    // onSuggestionSelected={this.props.onUserSelected}
                    // inputProps={{
                    //     ...inputProps,
                    // }}
                />
                <i className="fa fa-angle-down fa-2x" onClick={this.onDropDown} aria-hidden="true" />
            </React.Fragment>
        );
    }
}

export default AutoSuggestUser;
