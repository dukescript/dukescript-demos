/*-
 * #%L
 * dukescript-demos - a library from the "DukeScript" project.
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
ko.bindingHandlers.scroll = {
    init: function (element, valueAccessor, allBindings, viewModel) {
        var self = this;
        self.element = element;
        self.viewModel = viewModel;
        var scrollDummy = self.element.getElementsByClassName('scroll-dummy')[0];
        self.table = self.element.getElementsByClassName('big-table-table')[0];
        var maxPos = self.element.offsetHeight;
        var els = self.element.getElementsByClassName('big-table-row');
        var rowHeight = els[0].offsetHeight;
        self.viewModel.numVisible(maxPos / rowHeight);
        scrollDummy.style.height = rowHeight * self.viewModel.originalValues().length + "px";
        self.firstIndex = viewModel.firstIndex();
        self.viewModel.firstIndex.subscribe(function (newValue) {
            var scrollTop = self.element.scrollTop;
            if (self.firstIndex > newValue) {
                scrollTop -= rowHeight;
            }
            self.table.style.top = (scrollTop < 0 ? 0 : scrollTop) + "px";
            self.firstIndex = newValue;
        });
        self.ct=0;
        self.viewModel.originalValues.subscribe(function (newValue) {
            console.log("ct "+(ct++));
            scrollDummy.style.height = rowHeight * self.viewModel.originalValues().length + "px";
        });
        self.element.addEventListener('scroll', function (e) {
            var scrollTop = self.element.scrollTop;
            self.viewModel.firstIndex(Math.floor(scrollTop / rowHeight));
        });
    }
};
ko.components.register('big-table', {
    viewModel: function (params) {
        var self = this;
        self.originalValues = params.value;
        self.firstIndex = ko.observable(0);
        this.topIndex = ko.observable(0);
        self.numVisible = ko.observable(0);
        this.visibleRows = ko.computed(function () {
            var visibleValues = self.originalValues().slice(self.firstIndex(), self.firstIndex() + self.numVisible() + 1);
            return visibleValues;
        });
    },
    template: {element: 'big-table-template'}
});
