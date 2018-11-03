package com.dukescript.demo.crud.shared;

/*-
 * #%L
 * crud - a library from the "DukeScript" project.
 * %%
 * Copyright (C) 2018 Dukehoff GmbH
 * %%
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * #L%
 */

import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertNotNull;
import org.junit.Test;

public class ContactsTest {
    
    public ContactsTest() {
    }

    @Test public void noAlphabetInPhoneNumber() {
        Phone p = new Phone("+4AFDc", PhoneType.HOME);
        String err = p.getValidate();
        assertNotNull("Need error message, number is not valid", err);
    }

    @Test public void hasToStartWithPlus() {
        Phone p = new Phone("464254", PhoneType.WORK);
        String err = p.getValidate();
        assertNotNull("Need error message, number is not international", err);
    }

    @Test public void mayContainSpaces() {
        Phone p = new Phone("+1 464 254 542 555", PhoneType.MOBILE);
        String err = p.getValidate();
        assertNull("Spaces are OK",err);
    }
    
}
