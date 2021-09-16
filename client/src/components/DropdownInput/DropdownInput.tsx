import classnames from "classnames";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { Label, Wrapper } from "./DropdownInput.styles"

type Props = {
  label: string;
  name: string;
  options: string[];
  value: string;
  createable: boolean;
  required: boolean;
  handleChange: (e: any) => void;
  addData: (type: string, value: string) => void;
}

const DropdownInput: React.FC<Props> = ({ label, value, required, createable, name, options, handleChange, addData }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [valueExist, setValueExist] = useState(false);
  const [valid, setValid] = useState(false);
  const [selectedRowIdx, setSelectedRowIdx] = useState(-1);

  const dropdown = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add click listener when mounted
    document.addEventListener("mousedown", handleClickOutside);

    // Return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [])

  useEffect(() => {
    // Check if value exists, or if we should show add button
    const existing = options.indexOf(filter) > -1;
    setValueExist(existing);

    // Set filter
    const filtered = options.filter(options => options.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) > -1);
    setFilteredOptions(filtered);
    setSelectedRowIdx(-1);

    // Since we got new options or new value, see if current value is valid
    validate(filter);
  }, [filter, options])

  useEffect(() => {
    setFilter(value);
    validate(value);
  }, [value]);

  const selectValue = (value: string) => {
    console.log(value);
    setDropdownOpen(false);
    setFilter(value);
    let e: any = {
      target: {
        value,
        name,
      }
    };
    handleChange(e);
  }

  const handleClickOutside = (e: any) => {
    if (dropdown.current !== null && dropdown.current.contains(e.target)) {
      return;
    }

    setDropdownOpen(false);
  }

  const handleInputChange = (e: any) => {
    setFilter(e.target.value);
    setDropdownOpen(true);

    // Emit if valid value
    if (valid) {
      handleChange(e);
    }
  }

  const validate = (value: string) => {
    const valid: boolean = options.indexOf(value) > -1 || !required;
    setValid(valid);
  }

  const handleAddData = () => {
    // Add if it doesn't exist
    if (options.indexOf(filter) === -1) {
      addData(name, filter);
      selectValue(filter);
    }
    setDropdownOpen(false);
  }

  const handleKeyTraverse = (e: any) => {
    console.log('not here right')
    const { key } = e;
    
    if (key === "ArrowDown" && selectedRowIdx < filteredOptions.length - 1) {
      setDropdownOpen(true);
      setSelectedRowIdx(selectedRowIdx + 1);
    } else if (key === "ArrowUp" && selectedRowIdx > 0) {
      setSelectedRowIdx(selectedRowIdx - 1);
    } else if (key === "Enter" && filteredOptions[selectedRowIdx]) {
      selectValue(filteredOptions[selectedRowIdx]);
      setDropdownOpen(false);
    } else if (key === "Esc") {
      setDropdownOpen(false);
      e.stopPropagation();
    } else if (key === "Tab") {
      setDropdownOpen(false);
    }
  }

  return (
    <Wrapper>
      <Label>{label}</Label>
      <div className="row">
        <input
          type="text"
          className={ classnames({ valid, invalid: !valid }) }
          value={filter}
          onFocus={() => setDropdownOpen(true)}
          onChange={(e) => handleInputChange(e)}
          onKeyDown={(e) => handleKeyTraverse(e)}
          tabIndex={0}
        />
        {!valueExist && createable && filter.length > 0 && (<button onClick={() => handleAddData()}>+</button>) }
      </div>
      {dropdownOpen && filteredOptions.length > 0 && (
        <div className="dropdown" ref={dropdown}>
          {filteredOptions.map((opt, index) => (
            <div 
              key={index} 
              className={
                classnames("item", {
                selected: selectedRowIdx === index
              })}
              onClick={() => selectValue(opt)}>
                {opt}
            </div>
          ))}
        </div>
      )}
    </Wrapper>
  )
}

export default DropdownInput;