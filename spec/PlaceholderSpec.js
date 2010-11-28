describe("HTML5 Placeholder", function(){
  describe('input with no value', function(){
    beforeEach(function(){
      input = $('<input value="" placeholder="First Name">');
      placeholder.emulate(input);
    });
  
    describe("Element with empty value", function(){
      it("should display text from placeholder in field", function(){
        expect(input).toHaveValue('First Name');
      })
      
      it("should add the class placeholder to the element", function(){
        expect(input).toHaveClass('placeholder');
      })
      it("should blank the text on focus", function(){
        input.focus();
        
        expect(input).toHaveValue('');
      })
      
      describe("Blur Behavior", function(){
        beforeEach(function(){
          input.focus();
        });
        it("should return the text on blur if no text entered", function(){
          input.blur();
    
          expect(input).toHaveValue('First Name');
        })
        describe("User entered text", function(){
          beforeEach(function(){
            input.val('James Carr');
            input.blur();
          })
          it("should retain entered value on blur", function(){
            expect(input).toHaveValue("James Carr");
          })
          it("should not have placeholder class when changed", function(){
            expect(input).not.toHaveClass("placeholder");
          })
          describe("Then Blanked", function(){
            beforeEach(function(){
              input.val('');
              input.blur();
            })
            it("should have the placeholder text back", function(){
              expect(input).toHaveValue("First Name");
            })
            it("should have the placeholder class back", function(){
              expect(input).toHaveClass("placeholder");
            })
          })
          
        })
        
        
      })
    })
  })    
  
  describe('input with value populated', function(){
    beforeEach(function(){
      input = $('<input value="james carr" placeholder="First Name">');
      placeholder.emulate(input);
    });
    
    it("should not have the placeholder by default", function(){
      expect(input).toHaveValue('james carr');  
    })
    it("should not have the placeholder class by default", function(){
      expect(input).not.toHaveClass('placeholder');  
    })
    it("should not take value away on focus", function(){
      input.focus();
      
      expect(input).toHaveValue('james carr');
    })
  });   
})

