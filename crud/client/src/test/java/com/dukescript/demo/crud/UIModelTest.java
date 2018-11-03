package com.dukescript.demo.crud;

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

import com.dukescript.demo.crud.shared.Contact;
import com.dukescript.demo.crud.shared.PhoneType;
import net.java.html.junit.BrowserRunner;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.runner.RunWith;

/** Tests for behavior of your application in isolation. Verify
 * behavior of your MVVC code in a unit test.
  */
@RunWith(BrowserRunner.class)
public class UIModelTest {
    @Test public void addNewSetsEdited() {
        UI model = new UI();
        Contact c = new Contact();
        UIModel.edit(model, c);
        assertEquals("c is now edited", model.getEdited(), c);

        assertTrue("No phone yet", model.getEdited().getPhones().isEmpty());
        UIModel.addPhoneEdited(model);
        assertEquals("One phone added", model.getEdited().getPhones().size(), 1);
        assertEquals("First is home phone", model.getEdited().getPhones().get(0).getType(), PhoneType.HOME);

        UIModel.addPhoneEdited(model);
        assertEquals("2nd phone added", model.getEdited().getPhones().size(), 2);
        assertEquals("2nd is work phone", model.getEdited().getPhones().get(1).getType(), PhoneType.WORK);
    }
}
